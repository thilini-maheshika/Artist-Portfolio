const express = require('express');
const Events = require('../mvc/EventModel');

const router = express.Router();

//add event

router.post('/addEvent/create', async (req, res) => {
    try {
        const newEvent = new Events(req.body);
        await newEvent.save();
        return res.status(200).json({
            success: "Event Added Successfully"
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message // You can send the error message for debugging purposes
        });
    }
});

//get Event

router.get('/getEvents', async (req, res) => {
    try {
      const events = await Events.find(); // Retrieve all events from the database
      return res.status(200).json({
        success:true,
        existingEvents:events
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  });

  router.get('/getEventById/:id', async (req, res) => {
    try {
      const eventId = req.params.id;
      const event = await Events.findById(eventId);
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
      res.status(200).json(event);
    } catch (error) {
        console.error('Error fetching event by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
  });

  router.put('/update/:id', async (req, res) => {
    const eventId = req.params.id;
  
    try {
      const updatedEvent = await Events.findByIdAndUpdate(
        eventId,
        req.body, 
        { new: true } // This option returns the updated event as a response
      );
  
      if (!updatedEvent) {
        return res.status(404).json({ error: 'Event not found' });
      }

      const successMessage = 'Event Updated Successfully';
  
      return res.status(200).json({ message: successMessage, event: updatedEvent });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  });
  

  router.delete('/delete/:id', async (req, res) => {
    const eventId = req.params.id;
  
    try {
      const deletedEvent = await Events.findByIdAndDelete(eventId);
  
      if (!deletedEvent) {
        return res.status(404).json({ error: 'Event not found' });
      }
  
      const successMessage = 'Event deleted successfully';
  
      return res.status(200).json({ message: successMessage, event: deletedEvent });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  });

module.exports = router;
