function test() {

    var newli =document.createElement('li');
    var inputbox =document.getElementsById('newitem');
    
    inputbox.oninput =function(){
        newli.innerHTML = this.value;
    }
//    newitem.style.backgroundColor=rgb(34,342,232);
    
    var list =document.querySelector('#list');

    // var todo =document.querySelector('#heading');

    list.appendChild(newitem);

   

}

function testing(){
   
alert("hello");
}

function themechange() {
    var theme2 = document.querySelectorAll('.theme')
    var newtheme= randomcolor()
    for (var i = 0; i < theme2.length; i++) {
        theme2[i].style.backgroundColor = newtheme;
    }
    // theme2[2].style.color =randomcolor()

    var btn =document.querySelectorAll('button')
    btn[0].style.color =randomcolor()
}

var rand = function(){
    return Math.round(Math.random()*255 +1)
}
var randomcolor= function(){
    
    return 'rgb('+rand()+","+ rand() + ","+ rand() + ")"
}
