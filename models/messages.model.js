const mongoose = require('mongoose');



const messageSchema = mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        user : {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Users"
        }
    },{ timestamps: { createAt: true}}
)



module.exports = mongoose.model("Messages", messageSchema);

