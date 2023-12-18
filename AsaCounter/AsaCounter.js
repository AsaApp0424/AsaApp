var count = 0;
var record1 = 0;
var record2 = 0;
var record3 = 0;
var record4 = 0;
var record5 = 0;
var record6 = 0;
countshow.innerText = count;
record1.innerText = record1;
record2.innerText = record2;
record3.innerText = record3;
record4.innerText = record4;
record5.innerText = record5;
record6.innerText = record6;

function sum(){
    count = count + 1;
    countshow.innerText = count;
}

function record(){
    record6 = record5;
    record5 = record4;
    record4 = record3;
    record3 = record2;
    record2 = record1;
    record1 = count;
    count = 0;
    countshow.innerText = count;
    record1show.innerText = record1;
    record2show.innerText = record2;
    record3show.innerText = record3;
    record4show.innerText = record4;
    record5show.innerText = record5;
    record6show.innerText = record6;
}