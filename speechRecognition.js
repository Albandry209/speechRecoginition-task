// create a SpeechRecognition object
const recognition = new webkitSpeechRecognition();

// configure setting that continuous results are returned for each recognition
recognition.continuous = true;

// configure setting that interim results should be returned
recognition.interimResults = true;

// event handler when a word or phrase has been positively recognized
recognition.onresult = function (event) {
  console.log(event.results);
};