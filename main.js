// var nomedoarray=[]

 var objetos=[]
 status=""

 function Preload(){
    var video=createVideo("video.mp4")
    video.hide()
 }
 function Setup(){
    canvas=createCanvas(480,380)
    canvas.center()
 }
 function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);//importando a biblioteca
    document.getElementById("status").innerHTML="Status: detectando objetos"
 }
 function modelLoaded(){
    console.log("modelLoaded ativado")
    status=true
    video.loop()
    video.speed(1)
    video.volume(0.5)
 }