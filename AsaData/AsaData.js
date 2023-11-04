/*const front = document.getElementById("front");
const back = document.getElementById("back");

///frontがクリックされたらback作動
front.addEventListener("click", (e) => {
    if (back) {
    back.click();
    }
}, false);

var dropfile = document.getElementById('dropfile');
var fileinput = document.getElementById('back');
dropfile.addEventListener('dragover', function(e){
    e.preventDefault();
    dropfile.classList.add('dragover');
});
dropfile.addEventListener('dragleave', function(e){
    e.preventDefault();
    dropfile.classList.remove('dragover');
});

var file = getElementById('back');
var output = getElementById


1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26('output');
output.innerText = "hello";*/
var csv = {
	load:async function(filename,id){
		await fetch(filename).then(data=>data.text()).then((res)=>{
			let result = (res.split("\r\n").map(value=>{
				return "<tr>" + (value.split(",").map(val =>{
					return "<td>" + val.slice(1, -1) + "</td>";
				})).join("") +"</tr>";
			})).join("");
			if(result){
				document.getElementById(id).innerHTML = result;
			}
		}).catch(m =>{
			console.error(m);
		});
		return true;
	}
}

csv.load(".onetotwenty.csv", "table");