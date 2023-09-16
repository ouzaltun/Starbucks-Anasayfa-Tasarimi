function imgSlider(lazim){
    document.querySelector('.starbucks').src=lazim;

}
function changeCircleColor(color){
    const circle=document.querySelector('.circle');
    const span=document.querySelector('.button');
    const text=document.querySelector('.ozi');
    circle.style.background=color;
    span.style.background=color;
    text.style.color=color;
}