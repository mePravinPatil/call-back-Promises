function ProgressCountdown(timeleft, text) {
    return new Promise((resolve, reject) => {
      var countdownTimer = setInterval(() => {
        timeleft--;
  
       
        document.getElementById(text).textContent = timeleft;
  
        if (timeleft <= 0) {
          clearInterval(countdownTimer);
          resolve(true);
        }
        
      }, 1000);
      
    });
  }
  
  ProgressCountdown(10,  'pageBeginCountdownText').then(value => document.write(`Happy New Year`));
