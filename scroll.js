$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        console.log(scroll_pos);
        if(scroll_pos>2500){
            $(".home").css('color', '#a8a9b4');
            $(".main-home").css('color', '#a8a9b4');
            $(".about").css('color', '#a8a9b4');
            $(".main-about").css('color', '#a8a9b4');
            $(".re").css('color', '#a8a9b4');
            $(".main-re").css('color', '#a8a9b4');
            $(".port").css('color', '#a8a9b4');
            $(".main-port").css('color', '#a8a9b4');
            $(".sk").css('color', '#a8a9b4');
            $(".main-skill").css('color', '#a8a9b4');
            $(".con").css('color', '#2ECCFA');
            $(".main-con").css('color', '#2ECCFA');
        }else if(scroll_pos>2000){
            $(".home").css('color', '#a8a9b4');
            $(".main-home").css('color', '#a8a9b4');
            $(".about").css('color', '#a8a9b4');
            $(".main-about").css('color', '#a8a9b4');
            $(".re").css('color', '#a8a9b4');
            $(".main-re").css('color', '#a8a9b4');
            $(".port").css('color', '#a8a9b4');
            $(".main-port").css('color', '#a8a9b4');
            $(".sk").css('color', '#2ECCFA');
            $(".main-skill").css('color', '#2ECCFA');
            $(".con").css('color', '#a8a9b4');
            $(".main-con").css('color', '#a8a9b4');
        }else if(scroll_pos>1406){
            $(".home").css('color', '#a8a9b4');
            $(".main-home").css('color', '#a8a9b4');
            $(".about").css('color', '#a8a9b4');
            $(".main-about").css('color', '#a8a9b4');
            $(".re").css('color', '#a8a9b4');
            $(".main-re").css('color', '#a8a9b4');
            $(".port").css('color', '#2ECCFA');
            $(".main-port").css('color', '#2ECCFA');
            $(".sk").css('color', '#a8a9b4');
            $(".main-skill").css('color', '#a8a9b4');
            $(".con").css('color', '#a8a9b4');
            $(".main-con").css('color', '#a8a9b4');
        }else if(scroll_pos >940){
            $(".home").css('color', '#a8a9b4');
            $(".main-home").css('color', '#a8a9b4');
            $(".about").css('color', '#a8a9b4');
            $(".main-about").css('color', '#a8a9b4');
            $(".re").css('color', '#2ECCFA');
            $(".main-re").css('color', '#2ECCFA');
            $(".port").css('color', '#a8a9b4');
            $(".main-port").css('color', '#a8a9b4');
            $(".sk").css('color', '#a8a9b4');
            $(".main-skill").css('color', '#a8a9b4');
            $(".con").css('color', '#a8a9b4');
            $(".main-con").css('color', '#a8a9b4');
        }else if(scroll_pos > 384){
            $(".home").css('color', '#a8a9b4');
            $(".main-home").css('color', '#a8a9b4');
            $(".about").css('color', '#2ECCFA');
            $(".main-about").css('color', '#2ECCFA');
            $(".re").css('color', '#a8a9b4');
            $(".main-re").css('color', '#a8a9b4');
            $(".port").css('color', '#a8a9b4');
            $(".main-port").css('color', '#a8a9b4');
            $(".sk").css('color', '#a8a9b4');
            $(".main-skill").css('color', '#a8a9b4');
            $(".con").css('color', '#a8a9b4');
            $(".main-con").css('color', '#a8a9b4');
        }else{
            $(".home").css('color', '#2ECCFA');
            $(".main-home").css('color', '#2ECCFA');
            $(".about").css('color', '#a8a9b4');
            $(".main-about").css('color', '#a8a9b4');
            $(".re").css('color', '#a8a9b4');
            $(".main-re").css('color', '#a8a9b4');
            $(".port").css('color', '#a8a9b4');
            $(".main-port").css('color', '#a8a9b4');
            $(".sk").css('color', '#a8a9b4');
            $(".main-skill").css('color', '#a8a9b4');
            $(".con").css('color', '#a8a9b4');
            $(".main-con").css('color', '#a8a9b4');
        }

    });
});
const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: .5,  // 50%가 viewport에 들어와 있어야 callback 실행
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) { 
        entry.target.classList.add("active");
    } else {
        entry.target.classList.remove("active");
    }
    });
}, options);

const titleList = document.querySelectorAll('.about-se');
titleList.forEach(el => observer.observe(el));
//경계선
const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
        entry.target.classList.add("active");
    } else {
        entry.target.classList.remove("active");
    }
    });
}, options);

const titleList1 = document.querySelectorAll('.aboutme');
titleList1.forEach(el => observer1.observe(el));
//경계선
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
        entry.target.classList.add("active");
    } else {
        entry.target.classList.remove("active");
    }
    });
}, options);

const titleList2 = document.querySelectorAll('.info');
titleList2.forEach(el => observer2.observe(el));
//경계선
const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
        entry.target.classList.add("active");
    } else {
        entry.target.classList.remove("active");
    }
    });
}, options);

const titleList3 = document.querySelectorAll('.resume');
titleList3.forEach(el => observer3.observe(el));
//경계선
const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
        entry.target.classList.add("active");
    } else {
        entry.target.classList.remove("active");
    }
    });
}, options);

const titleList4 = document.querySelectorAll('.portfoilo');
titleList4.forEach(el => observer4.observe(el));
//경계선
const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
        entry.target.classList.add("active");
    } else {
        entry.target.classList.remove("active");
    }
    });
}, options);

const titleList5 = document.querySelectorAll('.skill');
titleList5.forEach(el => observer5.observe(el));
//경계선
const observer6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
        entry.target.classList.add("active");
    } else {
        entry.target.classList.remove("active");
    }
    });
}, options);

const titleList6 = document.querySelectorAll('.contact');
titleList6.forEach(el => observer6.observe(el));
//경계선