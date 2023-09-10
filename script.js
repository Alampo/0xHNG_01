function getCurrentDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayIndex = currentDate.getDay(); // 0 for Sunday, 1 for Monday, etc.
    const currentDayOfWeek = daysOfWeek[dayIndex];
    return currentDayOfWeek;
}
  // Get the current day of the week and display it on the webpage
  const dayOfWeekElement = document.getElementById('currentDayOfTheWeek');
  const currentDay = getCurrentDayOfWeek();
  dayOfWeekElement.innerHTML =  `Today is ${currentDay}`;

  function updateUTCTime() {
    const utcTimeElement = document.getElementById('currentUTCTime');
    const currentUTCTime = Date.now();
    utcTimeElement.innerHTML = `Current UTC Time (milliseconds): ${currentUTCTime}`;
}

  // Update the UTC time every second (1000 milliseconds)
  setInterval(updateUTCTime, 1000);

  // Initial update
  updateUTCTime();