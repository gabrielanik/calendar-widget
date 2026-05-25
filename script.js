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
  
  (function(){
    function setBodyBackground(){
      try{
        const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.style.background = isDark ? '#191919' : '#ffffff';
      } catch(e) {
        document.body.style.background = '#ffffff';
      }
    }
    if(window.matchMedia){
      window.matchMedia('(prefers-color-scheme: dark)').addListener(setBodyBackground);
    }
    setBodyBackground();
  })();