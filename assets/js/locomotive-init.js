const locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
smooth: true,
lerp: 0.1
});

locoScroll.on('scroll', (position) => {
if ((position.scroll.y) > 50) {
document.querySelector('#nav-container').classList.add('nav-container-bg');
} else {
document.querySelector('#nav-container').classList.remove('nav-container-bg');
}
});