import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const videoDiv = document.getElementsByClassName("video_div");

    const toggle = document.getElementById("header-toggle"),
    sidebar = document.getElementById("sidebar"),
    main = document.getElementById("main")
    
    const next_button = document.querySelector(".swiper-horizontal");
    const swiperdiv = document.querySelector("._2ndGroup");
    const videosBodtAfter = document.querySelector(".videos-body");
    
    toggle.addEventListener('click', ()=>{
        sidebar.classList.toggle('show-sidebar')
        main.classList.toggle('main-pd')
        swiperdiv.classList.toggle('swiper-after-show')
        next_button.classList.toggle('swiper-length-after-show')
        videosBodtAfter.classList.toggle('videos-body-after-show')
        for (let i=0; i<videoDiv.length; i++){
        videoDiv[i].classList.toggle('video_div_after_show')
        }
    })


const sidebarLink = document.querySelectorAll('.sidebar__link')

function linkColor(){
    sidebarLink.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
}
sidebarLink.forEach(l => l.addEventListener('click', linkColor))


let videos_body = document.querySelector(".videos-body");
const dataload = async() => {
    let url = 'http://localhost:3000/videos';
    const res = await fetch(url);
    const data = await res.json();

    data.forEach(data => {
        let video_div = document.createElement("div");
        video_div.className = "video_div";
        video_div.innerHTML = `
                <a href='/public/pages/video.html?id=${data.id}'>
                <div class="actuall-video">
                ${data.staticVideo}
                </div>
                </a>
                <div class="under-video-content">
                <div class="channel-image">${data.channelImage}</div>
                <div class="under-video-text">
                    <div class="video-name">${data.videoName}</div>
                    <div class="channel-name-and-views-and-date">${data.channel_name_and_views_and_date}</div>
                </div>
                <div class="three-dots">
                    ${data.threeDots}
                </div>
                </div>
            `
            videos_body.appendChild(video_div)
    })

const videoDiv2 = document.querySelectorAll(".video_div");
videoDiv2.forEach(videoDiv2 => {
    videoDiv2.addEventListener('mouseenter', () => {
    setTimeout(function(){
        videoDiv2.childNodes[1].childNodes[1].childNodes[1].play();
        
    }, 0);
});

videoDiv2.addEventListener('mouseleave', () => {
    videoDiv2.childNodes[1].childNodes[1].childNodes[1].pause();
    videoDiv2.childNodes[1].childNodes[1].childNodes[1].currentTime = 0;
});
});
}
window.addEventListener('DOMContentLoaded', () => dataload());