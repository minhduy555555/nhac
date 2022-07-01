var indexSlider=0
var libraryImg=['https://khamphamoingay.com/wp-content/uploads/2019/06/nhung-hinh-anh-ve-thien-nhien-dep-nhat-the-gioi-3.jpg','http://thanhnienmoi.com/upload/images/anh-dep-mua-thu-nhat-ban-2019-02.jpg','https://dalat.tuart.net/wp-content/uploads/2019/11/71471390_3087875531287608_8716598997239726080_o.jpg']
var slider=document.querySelector('.slider')
function replaceImg(indexSlider){
    slider.style.backgroundImage=`url(${libraryImg[indexSlider]})`
}
function leftSlider(){
    if(indexSlider<0){
        // -1      0
        console.log(libraryImg.length)
        indexSlider=3
    }
    replaceImg(indexSlider)
    indexSlider-- 
}
 function rigthIdex(){
     if(indexSlider >= libraryImg.length){
         console.log(indexSlider)
        indexSlider=0
     }
     replaceImg(indexSlider)
     indexSlider++
 }
document.querySelector('.control-btn-left').onclick=function(){
    leftSlider()
}
document.querySelector('.control-btn-rigth').onclick=function(){
    rigthIdex()
}
setInterval(() => {
    rigthIdex()
}, 3000);

var isplay=false

document.querySelector('.control-pause').onclick=function(){
    document.querySelector('.audio').play();
    document.querySelector('.control-song').classList.add('active')
}
document.querySelector('.control-play').onclick=function(){
    document.querySelector('.audio').pause();
    document.querySelector('.control-song').classList.remove('active')

}
document.querySelector('.audio').onended=function(){
    document.querySelector('.audio').play();
    
}
document.querySelector('.audio').ontimeupdate=function(){
    console.log(document.querySelector('.audio').currentTime)
    console.log(document.querySelector('.audio').duration)
}