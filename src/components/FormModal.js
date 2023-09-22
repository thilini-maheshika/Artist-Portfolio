import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import {
  Button,
  TextField,
  Grid,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { styled } from "@mui/system";

const theme = createTheme();

const FormModal = ({ isOpen, onClose , selectedDate}) => {
  const Paper = styled("div")({
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  });

  const [formData, setFormData] = useState({
    eventName: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  // // Handle date and time changes
  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    setFormData({
      formData,
      date: dateValue,
    });
  };

  const handleTimeChange = (e) => {
    const timeValue = e.target.value;
    setFormData({
      formData,
      time: timeValue,
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="form-modal"
      aria-describedby="form-modal-description"
    >
      <ThemeProvider theme={theme}>
        <Paper>
          <h2 id="form-modal">Event Information</h2>
          <form onSubmit={handleSubmit}>
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
                  <Button
                    onClick={onClose}
                    variant="contained"
                    color="secondary"
                  >
                    Close
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </ThemeProvider>
    </Modal>
  );
};

export default FormModal;
