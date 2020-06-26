
function test() {
    var list =document.querySelector('#list');
    var newitem =document.createElement('li');
    newitem.innerHTML =document.getElementById('inputbox').value;

    newitem.className +="theme"
    list.appendChild(newitem);
    document.getElementById('inputbox').value =" ";
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
