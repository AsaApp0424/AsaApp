var mintext = document.getElementById('min');
var maxtext = document.getElementById('max');
var show = getElementById('show');
var generate = getElementById('generate');
var min;
var max;
var list = [];

show.addEventListener("click", randomshow);
generate.addEventListener("click", randomgenerate);

function random(){
    var min = mintext.value;
    var max = maxtext.value;
    var random = Math.random() * (max - min) + min;
    random = Math.round(random);
    if(isNaN(random) == true){
        alert("This is not a number.")
    }else{
        randomnumber.innerText = random;
    }
}

/*
function randomgenerate(){
    min = mintext.value;
    max = maxtext.value;
    for(var i=min; i<max + 1; i++){
        list.push(i);
    }
    alert(list);
    alert("hello");
}
function randomshow(){
    var index;
    index = Math.random() * (max - min) + min;
    index = Math.round(index);
    max = max - 1;
    randomnumber.innerText = list[0];
}*/