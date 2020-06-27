
var togglecheck =function(){
    let parent =this.parentNode
    parent.classList.toggle('checked')
}

var deleteitem =function()
{
    let parent =this.parentNode;
    parent.remove();
}

var test =function() {
    var list =document.querySelector('#list');
    
    let inputtext =document.getElementById('inputbox').value;

    if(inputtext!== "")
    {
        
        list.appendChild(createtodo(inputtext));
        document.getElementById('inputbox').value =" ";
    }
    else{
        return;
    }
}

var createtodo =function(todo){
    let li =document.createElement('li')
    let label = document.createElement('label')
    label.innerHTML =todo;

    let checkbox = document.createElement('input')
    checkbox.type ='checkbox'
    checkbox.className ='check'
    checkbox.onclick =togglecheck;
    

    let deletebtn = document.createElement('button')
    deletebtn.innerHTML = "delete"
    deletebtn.className = 'theme delete'
    
    deletebtn.onclick =deleteitem;

    li.appendChild(checkbox);
    li.appendChild(label)
    li.appendChild(deletebtn);
    return li;
}

function themechange() {
    var theme2 = document.querySelectorAll('.theme')
    var newtheme= randomcolor()
    // var newtheme2 = randomcolor()
    for (var i = 0; i < theme2.length; i++) {
        theme2[i].style.backgroundColor = newtheme;
        // theme2.style.backgroundimage = lineargradient(newtheme,newtheme2)
    }
    // theme2[2].style.color =randomcolor()

   
}

var rand = function(){
    return Math.round(Math.random()*255 +1)
}
var randomcolor= function(){
    
    return 'rgb('+rand()+","+ rand() + ","+ rand() + ")"
}
