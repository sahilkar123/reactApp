let btn=document.querySelector("#btn")
let voice=document.querySelector("#voice")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning")
    }
    else if(hours>12 && hours < 16){
        speak("Good Afternoon")
    }
    else{
        speak("Good Evening")
    }
}
// window.addEventListener('load',()=>{
//     wishMe()
// })
let spechrecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new spechrecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    btn.innerText=transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
     btn.style.display="flex"
    //voice.style.display="none"
    if(message.includes("hello") || message.includes("Hey")){
        speak("Hello , What can I help You ?")
    }
    else if(message.includes("What is your name?")){
        speak("I am a virtual assistant made by Sahil Kar ")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/","_blank")
    }else if(message.includes("open chatgpt")){
        speak("opening chatgpt")
        window.open("https://openai.com/index/chatgpt/","_blank")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("https://www.whatsapp.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        // window.open("https://www.instagram.com/#","_blank")
        window.open("instagram://")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    else{
        speak(`here is your result ${message}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }
}