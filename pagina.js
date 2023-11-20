const speech = new SpeechSynthesisUtterance();
speech.text = "A National Football League é a liga esportiva profissional de futebol americano dos Estados Unidos. Consiste de 32 times, divididos igualmente entre duas conferências: a National Football Conference e a American Football Conference. ";
speech.lang = "pt-br";

window.speechSynthesis.speak(speech);