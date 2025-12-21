const imageGallery = document.getElementById('imageGallery');
const videoGallery = document.getElementById('videoGallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxVideo = document.getElementById('lightbox-video');
const closeBtn = document.getElementById('close');

// Offline images & videos
const images = [
    'assets/images/pic1.jpg',
    'assets/images/pic2.jpg',
    'assets/images/pic3.jpg',
    'assets/images/pic4.jpg'
];

const videos = [
    'assets/videos/video1.mp4',
    'assets/videos/video2.mp4'
];

// Load images
images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Gallery Image';
    img.addEventListener('click', () => openLightbox('image', src));
    imageGallery.appendChild(img);
});

// Load videos
videos.forEach(src => {
    const vid = document.createElement('video');
    vid.src = src;
    vid.addEventListener('click', () => openLightbox('video', src));
    videoGallery.appendChild(vid);
});

// Open lightbox
function openLightbox(type, src){
    lightbox.style.display = 'flex';
    if(type === 'image'){
        lightboxImg.src = src;
        lightboxImg.style.display = 'block';
        lightboxVideo.style.display = 'none';
    } else {
        lightboxVideo.src = src;
        lightboxVideo.style.display = 'block';
        lightboxImg.style.display = 'none';
    }
}

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxVideo.pause();
});
