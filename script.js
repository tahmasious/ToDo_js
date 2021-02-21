var tast = document.getElementById('bar');
var ul = document.querySelector('ul');
var btn = document.getElementById('sumbit');


function leni() {
    return tast.value.length;
}




function addtastinlist() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(tast.value));
    ul.appendChild(li);
    tast.value = "";

    li.addEventListener('click', mark);

    function mark() {
        li.classList.toggle('select');
    }


    var dbtn = document.createElement('button');
    dbtn.appendChild(document.createTextNode("x"));
    li.appendChild(dbtn);
    dbtn.addEventListener('click', delet);

    function delet() {
        li.style.display = "none";

    }

}


function first_filter() {
    if (leni() > 0) {
        addtastinlist();
    }

}


function second_filter(event) {
    if (leni() > 0) {
        if (event.which == 13) {

            addtastinlist();
        }

    }
}






btn.addEventListener('click', first_filter);
document.getElementById('bar').addEventListener('keypress', second_filter);
