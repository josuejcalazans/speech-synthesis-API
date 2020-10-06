const utterance = new SpeechSynthesisUtterance();
// utterance.voice = voices[3];
utterance.lang = "pt-BR";

function speak() {
	speechSynthesis.speak(utterance);
}

function stop() {
  speechSynthesis.cancel();
}

function setText(event) {
	utterance.text = event.target.innerText;
}