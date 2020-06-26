
// function test() {
//     var list =document.querySelector('#list');
//     var newitem =document.createElement('li');
//     newitem.innerHTML =document.getElementById('inputbox').value;

//     newitem.className +="theme"
//     list.appendChild(newitem);
//     document.getElementById('inputbox').value =" ";
// }

var togglecheck =function(){
    let parent =this.parentNode
    parent.classList.toggle('checked')
}

var deleteitem =function()
{
    let parent =this.parentNode;
    parent.remove();
}

function test() {
    var list =document.querySelector('#list');
    
    var inputtext =document.getElementById('inputbox').value;

    
    list.appendChild(createtodo(inputtext));
    document.getElementById('inputbox').value =" ";
}

var createtodo =function(todo){
    let li =document.createElement('li')
    li.className+= 'theme'
    let label = document.createElement('label')
    label.innerHTML =todo;

    let checkbox = document.createElement('input')
    checkbox.type ='checkbox'
    checkbox.onclick =togglecheck;

    let deletebtn = document.createElement('button')
    deletebtn.innerHTML = "delete"
    deletebtn.className = 'delete'
    deletebtn.onclick =deleteitem;

    li.appendChild(checkbox);
    li.appendChild(label)
    li.appendChild(deletebtn);
    return li;
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
