const express = require('express');
const app = express();
const mongoose = require('mongoose');

const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require ("./ExpressError");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Connect to MongoDB
main()
 .then(() => {
 console.log("Connection successful");
 })
 .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakeWhatsApp');
}

// Route to fetch all chats
app.get("/chats", async (req, res, next) => {
  try {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
  } catch (err) {
    next(err); // Propagate error to error handling middleware
  }
});

// Route to create a new chat
app.post("/chats", async (req, res, next) => {
  try {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date()
    });
    await newChat.save();
    res.redirect("/chats"); // Redirect to the chats page after creating a new chat
  } catch (err) {
    next(err); // Propagate error to error handling middleware
  }
});

// Route to render the form for creating a new chat
app.get("/chats/new", (req, res) => {
    res.render("new.ejs"); // Render the new.ejs template
});

// Route to fetch a specific chat by ID
app.get("/chats/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const chat = await Chat.findById(id);
        if (!chat) {
            throw new ExpressError(404, "Chat not found");
        }
        res.render("edit.ejs", { chat }); // Render the edit.ejs template with the chat data
    } catch (err) {
        next(err);
    }
});

// Route to update a specific chat by ID
app.put("/chats/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let { msg } = req.body;
        const chat = await Chat.findByIdAndUpdate(
            id,
            { msg: msg }, // Corrected the field name to 'msg'
            { runValidators: true, new: true }
        );
        console.log(chat);
        res.redirect("/chats");
    } catch (err) {
        next(err);
    }
});

// Route to delete a specific chat by ID
app.delete("/chats/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedChat = await Chat.findByIdAndDelete(id);
        if (!deletedChat) {
            throw new ExpressError(404, "Chat not found");
        }
        res.redirect("/chats");
    } catch (err) {
        next(err);
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Some error occurred" } = err;
    res.status(status).send(message);
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
