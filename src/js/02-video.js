import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoPlayer = document.querySelector('#vimeo-player');
const player = new Player(videoPlayer);

player.on('timeupdate', throttle(currentTime, 1000));

function currentTime({ seconds }) { 
    localStorage.setItem('videoplayer-current-time', seconds);
};

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);