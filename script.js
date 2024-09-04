const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setClock() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setClock, 1000);
setClock(); // Initial call to set clock instantly

function updateDigitalWatch() {
    const now = new Date();

    const year = now.getFullYear();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[now.getMonth()];
    const day = now.getDate().toString().padStart(2, '0');
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[now.getDay()];

    document.getElementById('year').textContent = year;
    document.getElementById('month').textContent = month;
    document.getElementById('day').textContent = day;
    document.getElementById('day-name').textContent = dayName;
}

// Call updateDigitalWatch once to set initial values
updateDigitalWatch();

// Optionally, if you want to update it daily at midnight or on page load
// setInterval(updateDigitalWatch, 24 * 60 * 60 * 1000); // Update daily


// Show the form when the "Save Event" button is clicked
document.getElementById('show-form').addEventListener('click', function() {
    const form = document.getElementById('event-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
});

// Handle form submission
document.getElementById('event-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const eventInput = document.getElementById('event').value;
    const descriptionInput = document.getElementById('description').value;
    const timestamp = new Date().toLocaleString(); // Current date and time

    // Create a new list item for the event
    const eventItem = document.createElement('li');
    eventItem.textContent = `${timestamp} - ${eventInput}: ${descriptionInput}`;

    // Add the new event to the list
    document.getElementById('events').appendChild(eventItem);

    // Show the "See Logs" button if there are events
    document.getElementById('see-logs').style.display = 'block';

    // Hide the form again after saving the event
    document.getElementById('event-form').style.display = 'none';

    // Clear the form inputs
    document.getElementById('event').value = '';
    document.getElementById('description').value = '';
});

// Toggle the visibility of the event log
document.getElementById('see-logs').addEventListener('click', function() {
    const eventList = document.getElementById('event-list');
    eventList.style.display = eventList.style.display === 'none' ? 'block' : 'none';
});
