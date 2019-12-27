$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


/****** 타이핑 효과 ******/

var typingBool = false;
var typingIdx=0;
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;

// 타이핑될 텍스트를 가져온다
var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
//liIndex 인덱스로 구분해 한줄씩 가져옴

typingTxt=typingTxt.split(""); // 한글자씩 잘라 배열로만든다

if(typingBool==false){ // 타이핑이 진행되지 않았다면
    typingBool=true;
    var tyInt = setInterval(typing,85); // 반복동작
}

function typing(){
    $(".typing ul li").removeClass("on");
    $(".typing ul li").eq(liIndex).addClass("on");
    //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.

    if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복
        $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다.
        typingIdx++;
    } else{ //한문장이끝나면
        if(liIndex<liLength-1){
            //다음문장으로  가기위해 인덱스를 1증가
            liIndex++;
            //다음문장을 타이핑하기위한 셋팅
            typingIdx=0;
            typingBool = false;
            typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

            //다음문장 타이핑전 1초 쉰다
            clearInterval(tyInt);
            //타이핑종료

            setTimeout(function(){
                //1초후에 다시 타이핑 반복 시작
                tyInt = setInterval(typing,85);
            },100);
        }
    }
}