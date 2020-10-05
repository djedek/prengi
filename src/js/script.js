
const slider = tns({
    container: '.carousel__my-slider',
    items: 1,
    slideBy: 'page',
	autoplay: false,
	controls: false,
	navPosition: 'bottom'
});

document.querySelector('.prev').addEventListener('click', function (){
	slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function (){
	slider.goTo('next');
});
