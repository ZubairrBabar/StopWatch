var min_html = document.getElementById("min_html")
var sec_html = document.getElementById("sec_html")
var ms_html = document.getElementById("ms_html")
var start_btn =document.getElementById("start-btn")

var minutes = 0
var seconds = 0
var milliSeconds = 0

var watchInterval

 function start(){

    watchInterval = setInterval(function(){
    milliSeconds++
    
    if(milliSeconds >=99){
        seconds++
        milliSeconds = 0
    }

    if(seconds > 59){
       minutes++
      seconds = 0
      
    }
    
    
    min_html.innerText = minutes <10 ? "0" + minutes : minutes
    sec_html.innerText = seconds < 10 ? "0" + seconds : seconds
    ms_html.innerText = milliSeconds
    start_btn.disabled = true
    start_btn.style.backgroundColor = "rgb(197, 181, 155)"
},10)

}
function stop(){
    start_btn.disabled = false
    start_btn.style.backgroundColor = ("rgb(95, 70, 31)")
    clearInterval(watchInterval)
}
function reset(){
    clearInterval(watchInterval)
    start_btn.disabled = false
    start_btn.style.backgroundColor = "rgb(95, 70, 31)"
    minutes = 0
    seconds = 0
    milliSeconds = 0
    min_html.innerText ="0" 
    sec_html.innerText = "0"
    ms_html.innerText = milliSeconds
}
     