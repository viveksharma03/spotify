console.log("welcome to Spotify");
//initialize the vaaribles

let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('materPlay')
let myprogressBar=document.getElementById('myprogressBar')
let gif=document.getElementById('gif')
let masterSongName=document.getElementById('masterSongName')
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songname:"Rula ke Gaya Ishq Tera", filePath:"songs/1.mp3",coverPath:"covers/1.png"},
    {songname:"Bappu Tere Karke", filePath:"songs/2.mp3",coverPath:"covers/2.png"},
    {songname:"Aye Mere Khuda", filePath:"songs/3.mp3",coverPath:"covers/3.png"},
    {songname:"Bewafa Nikli H Tu", filePath:"songs/4.mp3",coverPath:"covers/4.png"},
    {songname:"Filhal", filePath:"songs/5.mp3",coverPath:"covers/5.png"}
]
songItems.forEach((element,i) => {
//console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songname
});
//audioElement.play();


//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused||audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=1
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity=0
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   // console.log(progress);
    
   myprogressBar.value=progress;
})
myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
       element.classList.add('fa-circle-play');
  

    })

}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
element.addEventListener('click',(e)=>{
//console.log(e.target);
 makeAllPlays();
 songIndex = parseInt(e.target.id)
e.target.classList.remove('fa-circle-play')
e.target.classList.add('fa-circle-pause')
audioElement.src=`songs/${songIndex+1}.mp3`
masterSongName.innerText=songs[songIndex].songname
audioElement.currentTime==0;
audioElement.play();
gif.style.opacity=1
masterPlay.classList.remove('fa-circle-play')
masterPlay.classList.add('fa-circle-pause')
})

})
document.getElementById('next').addEventListener('click',()=>{
if (songIndex>=4) {
    songIndex=0
    audioElement.src=`songs/${songIndex+1}.mp3`
    masterSongName.innerText=songs[songIndex].songname
audioElement.currentTime==0;
audioElement.play();
gif.style.opacity=1
masterPlay.classList.remove('fa-circle-play')
masterPlay.classList.add('fa-circle-pause')
}
else{
    songIndex+=1
    audioElement.src=`songs/${songIndex+1}.mp3`
    masterSongName.innerText=songs[songIndex].songname
audioElement.currentTime==0;
audioElement.play();
gif.style.opacity=1
masterPlay.classList.remove('fa-circle-play')
masterPlay.classList.add('fa-circle-pause')

}

})

document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0) {
        songIndex=4
        masterSongName.innerText=songs[songIndex].songname
        audioElement.src=`songs/${songIndex+1}.mp3`
audioElement.currentTime==0;
audioElement.play();
gif.style.opacity=1
masterPlay.classList.remove('fa-circle-play')
masterPlay.classList.add('fa-circle-pause')
    }
    else{
        songIndex-=1
        audioElement.src=`songs/${songIndex+1}.mp3`
        masterSongName.innerText=songs[songIndex].songname
    audioElement.currentTime==0;
    audioElement.play();
    gif.style.opacity=1
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
    
    }
    
    })








