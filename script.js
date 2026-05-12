document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let selectedEvent = document.getElementById("eventType").value;

    // Store selected event
    localStorage.setItem("selectedEvent", selectedEvent);

    // Redirect to event details page
    window.location.href = "event-details.html";
});