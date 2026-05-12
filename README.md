# Event Planner Pro - Interactive Event Management System 🎈

## 📌 Project Title
**Event Planner Pro - Interactive Event Management System**

## 🎯 Purpose of Website
The purpose of "Event Planner Pro" is to provide a complete, interactive digital platform for an event management business. It allows users to explore a variety of professional event services—such as weddings, corporate meetings, concerts, and birthday parties—and seamlessly book their desired event online. The website acts as both a digital portfolio for the company and a functional lead-generation tool.

## 💻 Technologies Used
* **HTML5:** Used to build the multi-page structure and semantic layout of the website.
* **CSS3:** Applied for responsive design, modern UI styling, flexbox layouts, custom hover effects, and keyframe animations (such as glowing text and fade-ins).
* **JavaScript (Vanilla):** Utilized to add dynamic interactivity, specifically for handling the booking form, preventing default page reloads, and managing browser `localStorage`.

## ✨ Main Features of Website
* **Multi-Page Architecture:** Includes fully designed, dedicated pages for Home, About, Contact, Booking, and specialized service categories.
* **Dynamic Booking System:** A functional reservation form that captures user inputs (name, email, date, event type, guest count).
* **Local Storage Integration:** Uses JavaScript to save the user's selected event type in the browser's memory and passes that data to a new page.
* **Personalized Confirmation:** Dynamically renders custom text on the "Event Details" page depending on which event the user selected in the booking form.
* **Modern UI/UX Elements:** Features CSS animations, responsive image galleries, and a cohesive, colorful theme.

## 🔄 Website Flow / Working
1. **Exploration:** The user lands on the Home page (`index.html`), where they are greeted with an animated hero section and an overview of available services.
2. **Detailed Viewing:** The user can navigate to specific service pages (e.g., `wedding.html`, `corporate.html`, `birthday.html`, `concert.html`) to read details and view image galleries.
3. **Booking Submission:** The user navigates to the Booking page (`booking.html`) and fills out the reservation form.
4. **Data Processing:** Upon submitting the form, `script.js` intercepts the action, saves the chosen "Event Type" to `localStorage`, and redirects the user to the `event-details.html` confirmation page.
5. **Dynamic Rendering:** On the Event Details page, JavaScript retrieves the saved data and displays a custom message tailored specifically to the event they just booked.

## 🏁 Conclusion
Developing the Event Planner Pro website was a practical exercise in building a complete front-end web application. It successfully demonstrates the integration of structural HTML, aesthetic CSS animations, and functional JavaScript (DOM manipulation and Local Storage) to create a seamless, interactive user journey from service exploration to final booking.
