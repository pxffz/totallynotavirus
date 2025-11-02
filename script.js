document.getElementById('chaosButton').addEventListener('click', function() {
    const images = [
        'https://static.vecteezy.com/system/resources/previews/055/438/328/non_2x/a-troll-face-with-a-smile-on-it-vector.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa6CsNg7TlHLtJy5a8kQSIBNnX6t3mLQWmvbZeJfaCKHjWJSW-zbMlK5s4QmcN1emwunQ&usqp=CAU',
        'https://sc.mogicons.com/share/grinning-73.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWqARAze7-P3lyLAOvtyyLge7JJK0uLWlhqB5j3Mc1N7MQOfJvDyfrv2bEV_MjmzCx3Q&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYn5M52rFUoVL50tEQG2rCx1bydOgPEGSB5IHPHaKJ8aZqTd7jixoX6EMf0kfHIb2720&usqp=CAU',
        'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/22/82/5c/22825cba-0ace-a2ac-fe27-5a61647fe7ff/artwork.jpg/600x600bf-60.jpg',
        'https://i.ytimg.com/vi/jjtecWBPIb4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDXcIpG-zrlXHWnbsFs-oz1XNJxkg',
        'https://i.pinimg.com/736x/79/90/86/79908607fd5aabc31096596370e1e38d.jpg',
        'https://media.tenor.com/9LL2y-tTPUAAAAAe/troll-face-phonk.png',
        'https://geo-media.beatport.com/image_size/1400x1400/654c2319-7f25-4508-894a-91e3b50d6e9d.jpg',
        'https://media.tenor.com/N6rfqcMtA10AAAAe/troll-face-phonk.png',
        'https://media.tenor.com/ylGM-IPcIsUAAAAj/troll-face-phonk.gif',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bYFLtOARh137HnuX02BLVlotVXJqrbJT7Q&s',
        'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84e07643eee4418fcb74dcee47',
        'https://www.pngall.com/wp-content/uploads/17/Phonk-Troll-Face-Internet-Culture-PNG.png'
    ];

    const audio = new Audio('https://dl.dropboxusercontent.com/scl/fi/ihdomspxxl94bru5fx31r/Eduard-Khil-Trololo-Song-HD-GoldenApple.mp3?rlkey=tgukjnjx0iklo3pesnj3q28hw&st=z369q0ea&dl=0');
    audio.loop = true;
    audio.play();

    for (let i = 0; i < 15; i++) {
        const imgSrc = images[Math.floor(Math.random() * images.length)];
        const newTab = window.open('', '_blank');
        newTab.document.write('<html><head><title>Chaos</title></head><body style="margin:0;display:flex;justify-content:center;align-items:center;height:100vh;background-color:black;color:white;font-family:Arial,sans-serif;"><img src="' + imgSrc + '" style="width:400px;height:400px;"></body></html>');
    }
});
