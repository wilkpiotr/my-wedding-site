const deadline = '06 Oct 2018 15:00:00 GMT+0100';

const getTimeRemaining = (endtime) =>  {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
}



export const initializeClock = () => {
    const daysSpan = document.querySelector('.days');
    const hoursSpan = document.querySelector('.hours');
    const minutesSpan = document.querySelector('.minutes');
    const secondsSpan = document.querySelector('.seconds');
    const updateClock = () => {
        const t = getTimeRemaining(deadline);
        daysSpan.innerText = t.days;
        hoursSpan.innerText = t.hours;
        minutesSpan.innerText = t.minutes;
        secondsSpan.innerText = ('0' + t.seconds).slice(-2);
        if (t.total<=0) {
          clearInterval(timeinterval);
        }
      }
      
      updateClock();
      const timeinterval = setInterval(updateClock,1000);
    }