const Message = require('../models/Message');
const axios = require('axios');

// Translation function (using Google Translate API)
const translateMessage = async (message, targetLanguage) => {
    try {
        const response = await axios.post(`https://translation.googleapis.com/language/translate/v2`, {
            q: message,
            target: targetLanguage,
            key: process.env.GOOGLE_API_KEY,
        });
        return response.data.data.translations[0].translatedText;
    } catch (error) {
        console.error('Translation error:', error);
        return message;  // Return original message if translation fails
    }
};

// Send message function
const sendMessage = async (req, res) => {
    const { senderId, receiverId, senderRole, receiverRole, text, targetLanguage } = req.body;

    const translatedText = targetLanguage ? await translateMessage(text, targetLanguage) : null;

    const newMessage = new Message({
        senderId,
        receiverId,
        senderRole,
        receiverRole,
        text,
        translatedText,
    });

    try {
        await newMessage.save();
        res.status(200).json(newMessage);
    } catch (error) {
        res.status(500).json({ message: 'Error saving message' });
    }
};

// Get messages function
const getMessages = async (req, res) => {
    const { senderId, receiverId } = req.query;

    try {
        const messages = await Message.find({
            $or: [
                { senderId, receiverId },
                { senderId: receiverId, receiverId: senderId },
            ],
        }).sort({ timestamp: 1 });

        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching messages' });
    }
};

module.exports = { sendMessage, getMessages };
