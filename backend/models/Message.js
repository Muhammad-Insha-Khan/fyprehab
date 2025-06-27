const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    senderId: { type: String, required: true },
    receiverId: { type: String, required: true },
    senderRole: { type: String, required: true },  // Buyer, SkillsSwapper, Seller
    receiverRole: { type: String, required: true }, // Buyer, SkillsSwapper, Seller
    text: { type: String, required: true },
    translatedText: { type: String },
    timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
