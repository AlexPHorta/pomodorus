
const formatTime = (minutes, seconds) => {
    try {
      let minutes_ok = minutes >= 0 && minutes <= 99;
      let seconds_ok = seconds >=0 && seconds <= 59;
      if (!(minutes_ok && seconds_ok)) {
        throw new Error("Bad parameter. Out of range."); 
      }
    } catch (err) {
        alert( "Range Error: " + err.message );
    }
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

export { formatTime };
