keys=[ "A", "S", "D", "F", "G", "H", "J","W", "E", "T", "Y", "U"]
function Key(event){
    if (keys.includes(event.key.toUpperCase())){
        let audio=new Audio(`Music/${event.key.toUpperCase()}.mp3`)
        audio.type="audio/mpeg"
        audio.play()}

    else{
        console.log(`Wrong '${event.key}' key is pressed.`)
    }
}

document.addEventListener("keypress",(event)=>Key(event))
