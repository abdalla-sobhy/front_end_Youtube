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
const description = document.querySelector(".description");
const show_less = document.querySelector(".show_less");
description.addEventListener("click", function(){
    description.classList.add('show-description');
    show_less.addEventListener("click", function(e){
        e.stopPropagation();
        description.classList.remove('show-description');
    })
})


    const toggle2 = document.getElementById("header-toggle"),
    sidebar2 = document.getElementById("sidebar")
    const main = document.querySelector(".main");
        toggle2.addEventListener('click', ()=>{

            sidebar2.classList.toggle('show-sidebar2')
            main.classList.toggle('main-after-show')

            document.onclick = function(e){
                if (!sidebar2.contains(e.target) && !toggle2.contains(e.target)) {
                        sidebar2.classList.remove('show-sidebar2')
                        main.classList.remove('main-after-show')
                }
            }
        })


const sidebarLink = document.querySelectorAll('.sidebar__link')

function linkColor(){
    sidebarLink.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
}
sidebarLink.forEach(l => l.addEventListener('click', linkColor))


const dataload = async() => {
    let url = 'http://localhost:3000/videos';

    const res = await fetch(url);
    const data = await res.json();


    let videoId = window.location.href.charAt(window.location.href.length-1);
    const videoDiv = document.querySelector(".actuall-video-div");
    const videoName = document.querySelector(".video-name");
    const channelImage = document.querySelector(".channel-image");
    const channel_name_and_subsrcibers = document.querySelector(".channel-name-and-subsrcibers");
    const sideVideos = document.querySelector(".videosline");
    
    data.forEach(data => {
        if (data.id == videoId){
            videoDiv.innerHTML = `${data.video}`
            videoName.innerHTML = `${data.videoName}`
            channelImage.innerHTML = `${data.channelImage}`
            channel_name_and_subsrcibers.innerHTML = `${data.channel_name_and_subsrcibers}`
        }else{
            let video_div = document.createElement("div");
            video_div.className = "video_div";
            video_div.innerHTML =  `<
                    <div class="actuall-video">
                    <a href='/public/pages/video.html?id=${data.id}'>
                    ${data.staticVideo}</div>
                    </a>
                    <div class="next-video-content">
                    <div class="under-video-text">
                        <div class="rightVideos_name">${data.videoName}</div>
                        <div class="channel-name-and-views-and-date">${data.channel_name_and_views_and_date}</div>
                    </div>
                    <div class="three-dots">${data.threeDots}</div>
                    </div>
                    `
            sideVideos.appendChild(video_div)
        }
    })

}
window.addEventListener('DOMContentLoaded', () => dataload());