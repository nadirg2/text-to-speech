var input = document.getElementById("input");
var btn = document.getElementById("btn");
var select = document.getElementById("voices");
var synth = window.speechSynthesis;
var voices = null;

fillVoices();

btn.addEventListener("click", () => {
  var toSpeak = new SpeechSynthesisUtterance(input.value);
  toSpeak.voice = voices[select.selectedIndex];
  synth.speak(toSpeak);
});

function fillVoices() {
  voices = synth.getVoices();
  var selectedVoice = select.selectedIndex < 0 ? 0 : select.selectedIndex;
  voices.forEach((voice) => {
    let option = document.createElement("option");
    let option_child = document.createElement("div");
    option_child.setAttribute("class", "option__text");
    option_child.textContent = voice.name;
    option.appendChild(option_child);
    option.setAttribute("data-name", voice.name);
    select.appendChild(option);
  });
  select.selectedIndex = selectedVoice;
}
