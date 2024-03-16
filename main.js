new Swiper('.bxArea .swiper-container', {
    slidesPerView: 1, // 한 번에 보여줄 슬라이드 갯수 
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
        autoplay: {
        delay: 2000
    },
    pagination: {
        el: '.bxArea .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.bxArea .swiper-prev',
        nextEl: '.bxArea .swiper-next'
    }
});
new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});

new Swiper('.banner .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 10,
    slidesPerView: 5,
    navigation: {
        prevEl: '.banner .swiper-prev',
        nextEl: '.banner .swiper-next'
    }
});