var blocks=document.querySelectorAll('ul.menu li div');//находим коллекцию дивов
for(var i=0;i<blocks.length;i++){//присваиваем им всем событие наведения 
blocks[i].onmouseover=function(){
  this.style.background='#8E44AD';
//здесь можно писать любые другие стили
}
}