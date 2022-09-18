console.log("Welcome to my own spotify");

// VARIABLES
songIndex = 0;
const audioElement = new Audio('songs/1.mp3');
const masterPlay = document.getElementById('master-play');
const myProgressBar = document.getElementById('myProgressBar');
const masterSongName = document.getElementById('master-song-name');

const gif = document.getElementById('gif');
const songItme = Array.from(document.getElementsByClassName('song-item'));


const songsArr = [
    { songsName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    { songsName: "Tu chahiye", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    { songsName: "Rabba", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    { songsName: "Deaf kave", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    { songsName: "Bhula Dena", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    { songsName: "Tumhari kasam", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    { songsName: "Deaf kave", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    { songsName: "Bhula Dena", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    { songsName: "Tumhari kasam", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    { songsName: "Tumhari kasam", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"}
]

songItme.forEach((element, index) => {
    // console.log(element , index);

    element.getElementsByTagName('img')[0].src = songsArr[index].coverPath;
    element.getElementsByClassName('song-name')[0].innerText = songsArr[index].songsName;
});

// HANDLE PLAY/PAUSE CLICK 

masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime == 0){
        audioElement.play();
        masterPlay.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
});

// LISTEN TO EVENT 
audioElement.addEventListener('timeupdate', ()=> {
    // console.log("its playing");
    // UPDATE SEEKBAR 

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log("duration",audioElement.duration);
    // console.log("current time",audioElement.currentTime);
    // console.log('progreess', progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('song-item-play')).forEach((element)=>{
        // console.log("Makeallplay", element);
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    });
}

Array.from(document.getElementsByClassName('song-item-play')).forEach((element)=>{
    element.addEventListener('click', (e, i)=>{
        // console.log(e.target);
        makeAllPlays();
        // console.log(i);
        // console.log(e.target.id);
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songsArr[songIndex].songsName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })

});

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songsArr[songIndex].songsName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    // console.log('playing NExt', songIndex);
});

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 9;
    }
    else{
        songIndex -= 1;
    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songsArr[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    // console.log('playing previous', songIndex);
    console.log(masterSongName.innerText = songsArr[songIndex].songsName);
});

