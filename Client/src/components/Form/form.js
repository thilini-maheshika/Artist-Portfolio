import React, { useState } from "react";
import { Button, TextField, Grid, Box } from "@mui/material";
import '../FormModal.css';
import axios from 'axios';

function Form({ onClose, selectedDate }) {
    const [formData, setFormData] = useState({
        eventName: "",
        date: selectedDate,
        time: "",
        location: "",
        description: "",
      });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    setFormData({
      ...formData,
      date: dateValue,
    });
  };

  const handleTimeChange = (e) => {
    const timeValue = e.target.value;
    setFormData({
      ...formData,
      time: timeValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Form Data:", formData);
    axios.post('', {formData})
    .then(result => console.log(result))
    .catch(err=> console.log(err))
  };

  return (

    <form
      className="formModal"
      onSubmit={handleSubmit}
      encType="multiple/form-data"
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Event Name"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Date"
            name="date"
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
            required
            disabled
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Time"
            name="time"
            type="time"
            value={formData.time}
            onChange={handleTimeChange}
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={4}
            margin="normal"
          />
        </Grid>

        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button onClick={onClose} variant="contained" color="secondary">
              Close
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  )
}

export default Form;