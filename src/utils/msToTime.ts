export function msToTime(duration:number) {
    let milliseconds:string|number = Math.floor((duration % 1000) ),
      seconds:string|number = Math.floor((duration / 1000) % 60),
      minutes:string|number = Math.floor((duration / (1000 * 60)) % 60);
      
  
    milliseconds = (milliseconds < 10) ? "00" + milliseconds : (milliseconds<100)? '0'+milliseconds: milliseconds;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return minutes + ":" + seconds + ":" + milliseconds;
  }