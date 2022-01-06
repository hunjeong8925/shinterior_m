cate_lnb = document.getElementsByClassName("cate_lnb"); // 배열값
cate_lnb[0].style.display="none";
cateIcon = document.getElementById("cateIcon");

var opened = 0; // 열리지 않음

function toggleCateBtn() {
    if(opened==0) {
        cate_lnb[0].style.display="block";
        opened=1;
    }else if(opened==1) {
        cate_lnb[0].style.display="none";
        opened=0;
    }
    cateIcon.classList.toggle("fa-bars"); // 없으면 넣어주고 있으면 빼준다
    cateIcon.classList.toggle("fa-window-close"); //없으면 넣어준다
}

 $(document).ready(function(){
    $("#lnb a.m").click(function(){
        $(this).next().addBack().toggleClass("on"); 
        // next() : 선택한 요소의 바로 다음에 위치한 형제 요소를 선택
        // addback() : 현재 선택한 요소와 함께 이전에 선택한 요소도 선택하게 함 
        // $( 'ul' ).find( 'li' ).addBack() 은 ul의 하위 요소 중 li를 선택하고, 추가적으로 처음 선택했던 ul을 선택
        //toggleClass : .toggleClass()로 선택한 요소에 클래스(Class) 값을 넣었다 뺐다 할 수 있음
        //$( 'p' ).toggleClass( 'xyz' ); 는, p 요소에 xyz 클래스가 없으면 추가하고, 있으면 제거합니다.
    });
});	