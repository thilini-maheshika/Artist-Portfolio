const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    eventName: {
        type:String,
        required:true
    },
    eventDate: {
        type: Date,
        required:true
    },
    eventTime: {
        type:String,
        required:true
    },
    EventLocation: {
        type:String,
        required:true
    },
    eventDescription: {
        type:String,
        required:true
    },
})

const eventModel = mongoose.model("events", EventSchema )
module.exports = eventModel