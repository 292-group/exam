
        const stopwatch = document.getElementById('clock')
        let sec = 0;
        let min = 0;
        let msec = 0;
        let interval;
        const startBtn = document.getElementById('start')
        const stopBtn = document.getElementById('stop')
        const resetBtn = document.getElementById('reset')


        const minutes = document.getElementById('min')
        const seconds = document.getElementById('sec')
        const milSeconds = document.getElementById('msec')


        startBtn.addEventListener('click',setTimer)
        stopBtn.addEventListener('click',stopTimer)
        resetBtn.addEventListener('click',resetTimer)

        function setTimer() {
            interval = setInterval(StartTimer , 1*10) 
            startBtn.setAttribute('disabled','disabled')
        }

        function stopTimer() {
            clearInterval(interval);
            startBtn.removeAttribute('disabled','disabled')
        }

        function resetTimer() {
            clearInterval(interval);
            sec = 0;
            min = 0;
            msec = 0;

            milSeconds.innerHTML = "0" + msec;
            seconds.innerHTML = "0" + sec;
            minutes.innerHTML = "0" + min;
            startBtn.removeAttribute('disabled','disabled')
        }

       function StartTimer() { 
            msec++
           if (msec < 10) {
            milSeconds.innerHTML = "0" + msec;
           }
           if (msec >= 10) {
            milSeconds.innerHTML =msec; 
           }

        if (msec > 99) {
            msec = 0;
           milSeconds.innerHTML = "0" + msec;
           sec++ 
           if (sec < 10) {
            seconds.innerHTML = "0" + sec;
           }
           if (sec >= 10) {
            seconds.innerHTML =sec; 
           }
       } if (sec > 59) {
            sec = 0;
            seconds.innerHTML = "0" + sec;
           min++ 
           if (min < 10) {
            minutes.innerHTML = "0" + min;
           }
           if (min >= 10) {
            minutes.innerHTML =min; 
           }
       }
        }