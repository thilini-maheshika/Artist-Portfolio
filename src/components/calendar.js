import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FormModal from "./FormModal";

function Calendar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // Track the selected date

  const openModal = (info) => {
    setIsModalOpen(true);
    setSelectedDate(info.dateStr); // Set the selected date
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"90vh"}
        selectable={true}
        dateClick={openModal} // Open the modal when a date is clicked
      />

      {/* Pass selectedDate to FormModal */}
      <FormModal isOpen={isModalOpen} onClose={closeModal} selectedDate={selectedDate} />
    </div>
  );
}

export default Calendar;
