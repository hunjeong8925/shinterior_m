
slideIndex = 1;
showslides(slideIndex);
function showslides(n) {
    slides = document.getElementsByClassName("myslide");
    for(i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }
    if(n>slides.length) { slideIndex =1;}
    if(n<1) {slideIndex = slides.length;}
    slides[slideIndex-1].style.display="block";

    dots = document.getElementsByClassName("dot");
    for(i=0; i<dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[slideIndex-1].classList.add("active");
}

function plusslide(n) {
    showslides(slideIndex+=n);
}
id = setInterval("plusslide(1);",5000);








//서브메뉴 숨기기
var submenu = document.getElementsByClassName("sub");
for(i=0; i<submenu.length; i++) {
submenu[i].style.display = "none";
}
function showmenu(no) {
    submenu[no-1].style.display = "block";
}
function hidemenu(no) {
    submenu[no-1].style.display = "none";
}





//메인페이지 프로젝트 슬라이드
var slider = document.getElementById("slider");  //슬라이드자체 wrapper를 감싼 div
var slidesItem = document.getElementById("slides");  //이미지들을 담은 박스
var allowShiftFlag = true;  //슬라이드가 동작할지 안할지 체크하는 변수
var posInition = 0; //슬라이드가 시작하는위치
var slides = document.getElementsByClassName("slide");   //슬라이드 배열값
var slidesLength = slides.length;   //슬라이드 갯수
var slideSize = slides[0].offsetWidth;  //1000 슬라이드길이  html 엔터누르면 값 커짐
 //alert(slideSize);

 //appendChild 노드추가 firstSlide 추가 맨끝에 첫번째가 와야되니까
 //insertBefore 특정태그 이전에 노드추가 LastSlide 추가 맨앞에 맨 마지막 슬라이드가 와야되니까
var firstSlide = slides[0];
var lastSlide = slides[slidesLength-1];  //배열값이 0부터 시작하기 때문에 -1
var cloneFirstTag = firstSlide.cloneNode(true);  //true:자식노드 복제, flase: 자신만 복제
var cloneLastTag = lastSlide.cloneNode(true);

slidesItem.appendChild(cloneFirstTag);
slidesItem.insertBefore(cloneLastTag, firstSlide);  //(태그,위치)

var re_prev = document.getElementById("re_prev");
var re_next = document.getElementById("re_next");
var index = 0;
re_prev.addEventListener("click",function(){ shiftSlide(-1); } );
re_next.addEventListener("click",function(){ shiftSlide(1); } );

slidesItem.addEventListener("transitionend",checkIndex);

function shiftSlide(dir) {  //1:next -1:prev
    slidesItem.classList.add("shifting");
    //slideItem은 이미지를 싸고있는 긴 박스
    if(allowShiftFlag) {
        posInition = slidesItem.offsetLeft;
        if(dir==1) {
            slidesItem.style.left = (posInition - slideSize) + "px";
            index++;
        }else if(dir==-1) {
            slidesItem.style.left = (posInition + slideSize) + "px";
            index--;
        }
    }
    allowShiftFlag = false;  //슬라이드 정지
}

//애니메이션 끝나고 이미지의 순서를 체크하는 함수
function checkIndex() {

    slidesItem.classList.remove("shifting");
    if(index == slidesLength) {  //슬라이드 마지막 위치에 오면
        slidesItem.style.left = -(1 * slideSize) +"px";
        index=0;
    }
    if(index == -1){
        slidesItem.style.left = -(slidesLength * slideSize) +"px";
        index = slidesLength - 1;
    } 
    allowShiftFlag = true;  //오동작을 막기귀한 명령
}