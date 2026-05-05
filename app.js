function speak(text) {
    let speech = new SpeechSynthesisUtterance(text);

    let voices = window.speechSynthesis.getVoices();

    // Male voice choose karne ki try
    let maleVoice = voices.find(voice => 
        voice.name.toLowerCase().includes("male") ||
        voice.name.toLowerCase().includes("david") ||
        voice.name.toLowerCase().includes("alex")
    );

    if (maleVoice) {
        speech.voice = maleVoice;
    }

    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
}