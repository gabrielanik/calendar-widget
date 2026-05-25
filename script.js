function buildCalendar() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
  
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
  
    const calendar = document.getElementById("calendar");
  
    const monthName = now.toLocaleString('default', { month: 'long' });
    document.getElementById("monthTitle").innerText = `${monthName} ${year}`;
  
    // JS Sunday=0, we want Monday start
    let startDay = firstDay.getDay();
    startDay = (startDay + 6) % 7;
  
    // empty slots before month start
    for (let i = 0; i < startDay; i++) {
      const empty = document.createElement("div");
      empty.className = "day empty";
      calendar.appendChild(empty);
    }
  
    const today = new Date().getDate();
  
    // days
    for (let d = 1; d <= lastDay.getDate(); d++) {
      const cell = document.createElement("div");
      cell.classList.add("day");
  
      if (d === today) {
        cell.classList.add("today");
      } else {
        cell.classList.add("normal");
      }
  
      cell.innerText = d;
      calendar.appendChild(cell);
    }
  }
  
  buildCalendar();

  (function () {

    function setTheme() {
        try {
            const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        
            const app = document.querySelector('.app');
            if (app) {
                app.style.background = isDark ? '#2f2f2f' : '#E9E9E9';
            }

            const header = document.querySelector('.header');
            if (header) {
                header.style.color = isDark ? '#ffffff' : '#000000';
            }
        
            const weekdays = document.querySelector('.weekdays');
            if (weekdays) {
                weekdays.style.background = isDark ? '#242424' : '#BABABA';
                weekdays.style.color = isDark ? '#c4c4c4' : '#2E2D2D';
            }
        
            const dayElements = document.querySelectorAll('.day');
            dayElements.forEach(day => {
            day.style.color = isDark ? '#ffffff': '#000000';
            });

            const today = document.querySelector('.today');
            if (today) {
                today.style.background = isDark ? '#A0A0A0' : '#BABABA';
                today.style.color = isDark ?  '#000000' : '#ffffff';
            }

            document.body.style.background = isDark ? '#191919' : '#ffffff';

        } catch(e) {
            app.style.background = '#c7c7c7';
            header.style.color = '#000000';
            weekdays.style.background = '#b0b0b0';
            weekdays.style.color = '#2E2D2D';
            dayElements.forEach(day => {
                day.style.color = '#000000';
                });
            today.style.background = '#8C8B8B';
            today.style.color = '#ffffff'; 
            document.body.style.background = '#ffffff'; 
        }
    }
  
    // listen for theme change
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', setTheme);
    }
  
    setTheme();
  
  })();