import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = new Player('vimeo-player', {});

function onTimeUpdate(event) {
  const currentTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}

const throttledTimeUpdate = throttle(onTimeUpdate, 1000);

vimeoPlayer.on('timeupdate', throttledTimeUpdate);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  vimeoPlayer.setCurrentTime(parseFloat(savedTime));
}
