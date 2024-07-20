const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakeWhatsApp');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
let allChats = [
    {
        from: "Draupadi",
        to: "Karna",
        msg: "I won't be marrying a chariotter's son",
        created_at: new Date()
    },
    {
        from: "Arjun",
        to: "Karna",
        msg: "Please forgive me",
        created_at: new Date()
    },
    {
        from:"Karna",
        to:"Kunti",
        msg:"Je paksher parajoy , sei paksha tyajite more koro na ahwan",
        created_at: new Date()
    },
    {
        from: "Krishna",
        to: "Arjuna",
        msg: "Perform your duty; fight without considering the fruits of your actions.",
        created_at: new Date()
    },
    {
        from: "Yudhishthira",
        to: "Bhima",
        msg: "Truth alone triumphs.",
        created_at: new Date()
    },
    {
        from: "Duryodhana",
        to: "Dronacharya",
        msg: "Dronacharya, I pledge to be your obedient student. Please teach me the art of warfare.",
        created_at: new Date()
    },
    {
        from: "Kunti",
        to: "Karna",
        msg: "Karna, you are my son. Please join the Pandavas and fight alongside your brothers.",
        created_at: new Date()
    },
    {
        from: "Duryodhana",
        to: "Karna",
        msg: "Karna, you are my dearest friend and ally. I need your support in the battle against the Pandavas.",
        created_at: new Date()
    },
    {
        from: "Arjuna",
        to: "Karna",
        msg: "Karna, let us settle our rivalry on the battlefield once and for all.",
        created_at: new Date()
    },
    {
        from: "Karna",
        to: "Duryodhana",
        msg: "My dear friend, I assure you of my unwavering loyalty. Together, we shall triumph.",
        created_at: new Date()
    },
    {
        from: "Karna",
        to: "Arjuna",
        msg: "Arjuna, I admire your skills in archery. Let us test our prowess on the battlefield.",
        created_at: new Date()
    },
    {
        from: "Karna",
        to: "Krishna",
        msg: "Krishna, why do you always favor the Pandavas? Do you not see the righteousness in our cause?",
        created_at: new Date()
    },
    {
        from: "Karna",
        to: "Bhishma",
        msg: "Respected Bhishma, I seek your blessings and guidance in the upcoming battle.",
        created_at: new Date()
    },
    {
        from: "Karna",
        to: "Draupadi",
        msg: "Draupadi, forgive me for my past actions. I regret the pain I caused you and your family.",
        created_at: new Date()
    },
    {
        from: "Karna",
        to: "Kunti",
        msg: "Mother, I understand the truth now. Though we are bound by blood, destiny has placed me on a different path.",
        created_at: new Date()
    },
    {
        from: "Karna",
        to: "Shalya",
        msg: "Uncle Shalya, I request you to be my charioteer in the battle. Your support means everything to me.",
        created_at: new Date()
    },
    {
        from: "Karna",
        to: "Ashwatthama",
        msg: "Ashwatthama, let us fight side by side and prove our valor on the battlefield.",
        created_at: new Date()
    },
    {
        from: "Karna",
        to: "Dushasana",
        msg: "Dushasana, I owe you a debt of gratitude for standing by me in my darkest hours.",
        created_at: new Date()
    },
    {
        from: "Karna",
        to: "Shakuni",
        msg: "Shakuni, your cunning strategies have been invaluable to our cause. Let us outwit our enemies once again.",
        created_at: new Date()
    }
]
Chat.insertMany(allChats);
