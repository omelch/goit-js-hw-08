import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


    const iframeRef = document.querySelector('#vimeo-player');
    const player = new Player(iframeRef);





    
    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
