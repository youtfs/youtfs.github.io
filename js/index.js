/**
 * Created by Administrator on 2016/12/29.
 */
window.onload = function () {
    search();

};

function search() {
    var headerBox = document.getElementById("jd_header_wrapper");
    var bannerBox = document.getElementById("jd_banner_wrapper");
    // 获取banner盒子的高度
    var bannerHeight = bannerBox.offsetHeight;
    console.log(headerBox);
    console.log(bannerHeight);

    window.onscroll = function (ev) {
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        console.log(top);
        console.log("滚动条滚了");
        if (top > bannerHeight) {

            headerBox.style.background = 'rgba(201, 21, 35, 0.85)';
        }else {
            var op = top / bannerHeight * 0.85;
            headerBox.style.background = 'rgba(201, 21, 35, '+ op +')';

        }
    }
}


var jd_box=document.getElementById("jd_box");
var jd_box_width=jd_box.offsetWidth/10;
var num=0;
function autoPlay() {
    if (num === -jd_box_width*8){
        num=0;
    }
    num=num-1;
    jd_box.style.left=num +"px";
    if (num % jd_box_width === 0){
        clearInterval(timer1);
        timer2 =setTimeout(function () {
            timer1=setInterval("autoPlay()",1);
        },3000);
    }
}

var timer1=setInterval("autoPlay()",1);
