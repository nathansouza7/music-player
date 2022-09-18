let musics = [
    {
    title:'FACK',
    artist:'Eminem',
    src:'musics/2005 - Curtain Call_ The Hits/02 - FACK.mp3'
    },

    {
    title:'The Way I Am',
    artist:'Eminem',
    src:'musics/2005 - Curtain Call_ The Hits/03 - The Way I Am.mp3'
    },

    {
        title:'My Name Is',
        artist:'Eminem',
        src:'musics/2005 - Curtain Call_ The Hits/04 - My Name Is.mp3'
    },

    {
        title:'Stan',
        artist:'Eminem',
        src:'musics/2005 - Curtain Call_ The Hits/05 - Stan.mp3'
    },

    {
        title:'Lose Yourself',
        artist:'Eminem',
        src:'musics/2005 - Curtain Call_ The Hits/06 - Lose Yourself (From _8 Mile_ Soundtrack).mp3'
    },

    {
        title:'Shake That',
        artist:'Eminem',
        src:'musics/2005 - Curtain Call_ The Hits/07 - Shake That.mp3'
    },

    {
        title:'Sing For The Moment',
        artist:'Eminem',
        src:'musics/2005 - Curtain Call_ The Hits/08 - Sing For The Moment.mp3'
    },

    {
        title:'Without Me',
        artist:'Eminem',
        src:'musics/2005 - Curtain Call_ The Hits/09 - Without Me.mp3'
    },

    {
        title:'Like Toy Soldiers',
        artist:'Eminem',
        src:'musics/2005 - Curtain Call_ The Hits/10 - Like Toy Soldiers.mp3'
    },

    {
        title:'The Real Slim Shady',
        artist:'Eminem',
        src:'musics/2005 - Curtain Call_ The Hits/11 - The Real Slim Shady.mp3'
    },

    {
        title:'Mockingbird',
        artist:'Eminem',
        src:'musics/2005 - Curtain Call_ The Hits/12 - Mockingbird.mp3'
    },

    {
        title:'Guilty Conscience',
        artist:'Eminem',
        src:'musics/2005 - Curtain Call_ The Hits/13 - Guilty Conscience.mp3'
    },

    {
        title:'Cleanin Out My Closet',
        artist:'Eminem',
        src:'musics/2005 - Curtain Call_ The Hits/14 - Cleanin Out My Closet.mp3'
    },

    {
        title:'When Im Gone',
        artist:'Eminem',
        src:'musics/2005 - Curtain Call_ The Hits/16 - When Im Gone.mp3'
    },

    {
        title:'Stan',
        artist:'Eminem',
        src:'musics/2005 - Curtain Call_ The Hits/17 - Stan (Live At 43rd Grammy Awards).mp3'
    },
];

let music = document.querySelector('audio');
let indexMusic = 0;

let musicDuration = document.querySelector('.end');
let image = document.querySelector('img');
let musicName = document.querySelector('.description h2');
let artistName = document.querySelector('.description i')
let volume_slider = document.querySelector(".volume_slider");

renderMusic(indexMusic);

// Eventos
document.querySelector('.button-play').addEventListener('click', playMusic);

document.querySelector('.button-pause').addEventListener('click', pauseMusic);

music.addEventListener('timeupdate', refreshBar);

document.querySelector('.previous').addEventListener('click', () => {
    indexMusic--;
    if (indexMusic < 0) {
        indexMusic = 16;
    }
    renderMusic(indexMusic);
    playMusic();
});

document.querySelector('.next').addEventListener('click', () => {
    indexMusic++;
    if (indexMusic > 16){
        indexMusic = 0;
    }
    renderMusic(indexMusic);
    playMusic();
});

// Funções
function renderMusic(index){
    music.setAttribute('src', musics[index].src);
    music.addEventListener('loadeddata', () => {
        musicName.textContent = musics[index].title;
        artistName.textContent = musics[index].artist;
        musicDuration.textContent = secondsToMinutes(Math.floor(music.duration));
    });
}

function playMusic(){
    music.play();
    document.querySelector('.button-pause').style.display = 'block';
    document.querySelector('.button-play').style.display = 'none';
}

function pauseMusic(){
    music.pause();
    document.querySelector('.button-pause').style.display = 'none';
    document.querySelector('.button-play').style.display = 'block';
}

function refreshBar(){
    let bar = document.querySelector('progress');
    bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    let elapsedTime = document.querySelector('.start');
    elapsedTime.textContent = secondsToMinutes(Math.floor(music.currentTime));
}

function secondsToMinutes(seconds){
    let minutesField = Math.floor(seconds / 60);
    let secondsField = seconds % 60;
    if (secondsField < 10){
        secondsField = '0' + secondsField;
    }

    return minutesField+':'+secondsField;
}

function setVolume() {
    music.volume = volume_slider.value / 100;
}