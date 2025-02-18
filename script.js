// Your script here.
// Create a new speech synthesis instance
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

// Function to populate the voices dropdown
function populateVoices() {
  voices = speechSynthesis.getVoices();
  voicesDropdown.innerHTML = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

// Set the selected voice
function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
}

// Start speech synthesis
function speak() {
  if (msg.text.trim() === "") return; // Prevent empty speech
  speechSynthesis.cancel(); // Stop any ongoing speech
  speechSynthesis.speak(msg);
}

// Stop speech synthesis
function stop() {
  speechSynthesis.cancel();
}

// Update speech properties (rate, pitch, text)
function setOption() {
  msg[this.name] = this.value;
}

// Populate voices when they change
speechSynthesis.addEventListener('voiceschanged', populateVoices);

// Event listeners
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', speak);
stopButton.addEventListener('click', stop);

// Set initial text value
msg.text = document.querySelector('[name="text"]').value;
// Create a new speech synthesis instance
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

// Function to populate the voices dropdown
function populateVoices() {
  voices = speechSynthesis.getVoices();
  voicesDropdown.innerHTML = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

// Set the selected voice
function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
}

// Start speech synthesis
function speak() {
  if (msg.text.trim() === "") return; // Prevent empty speech
  speechSynthesis.cancel(); // Stop any ongoing speech
  speechSynthesis.speak(msg);
}

// Stop speech synthesis
function stop() {
  speechSynthesis.cancel();
}

// Update speech properties (rate, pitch, text)
function setOption() {
  msg[this.name] = this.value;
}

// Populate voices when they change
speechSynthesis.addEventListener('voiceschanged', populateVoices);

// Event listeners
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', speak);
stopButton.addEventListener('click', stop);

// Set initial text value
msg.text = document.querySelector('[name="text"]').value;
