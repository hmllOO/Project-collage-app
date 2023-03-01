var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){

    recognition.start();
}
recognition.onresult = function (event){
    console.log(event);
     var Content = event.results[0][0].transcript;
     document.getElementById("textbox").innerHTML = Content;
     console.log(Content);
     if(Content == "take my selfie"){
      console.log("taking selfie");
      speak();
     }
}
 
function speak(){
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in five seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
take_snapshot();
    save();
    },5000);
}
camera = document.getElementById("camera");
Webcam.set({
    width : 360,
    height : 260,
    image_format : 'png',
    png_quality : 100
});