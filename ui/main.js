console.log('Loaded!');
var element=document.getElementById('main text');
element.innerHTML='Nandhiny imad app';
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+2;
    img.style.marginLeft=marginLeft+'px';
    
}
img.onclick=function()
{
    var interval=setInterval(moveRight,40);
    
}