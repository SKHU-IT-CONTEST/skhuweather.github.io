
// 제보를 위해 이미지를 클릭한 횟수를 저장할 변수 선언
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
var count_arr = [count1, count2, count3, count4, count5, count6];


// 중복 방지를 위한 함수 정의
var doubleSubmitFlag = false;

function doubleSubmitCheck() {
    if (doubleSubmitFlag) {
        return doubleSubmitFlag;
    } else {
        doubleSubmitFlag = true;
        return false;
    }

}


function insert() {

    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    const button4 = document.getElementById("button4");
    const button5 = document.getElementById("button5");
    const button6 = document.getElementById("button6");
    const textHolder1 = document.getElementById("count1");
    const textHolder2 = document.getElementById("count2");
    const textHolder3 = document.getElementById("count3");
    const textHolder4 = document.getElementById("count4");
    const textHolder5 = document.getElementById("count5");
    const textHolder6 = document.getElementById("count6");


    button1.addEventListener("click", function () {
        if (!doubleSubmitCheck()) {
            alert("제보 완료!");
            textHolder1.innerHTML = ++count_arr[0];
        } else if (doubleSubmitCheck()) {
            alert("제보는 1번만 가능합니다.");
        }
    });

    button2.addEventListener("click", function () {
        if (!doubleSubmitCheck()) {
            alert("제보 완료!");
            textHolder2.innerHTML = ++count_arr[0];
        } else if (doubleSubmitCheck()) {
            alert("제보는 1번만 가능합니다.");
        }
    });
    button3.addEventListener("click", function () {
        if (!doubleSubmitCheck()) {
            alert("제보 완료!");
            textHolder3.innerHTML = ++count_arr[2];
        } else if (doubleSubmitCheck()) {
            alert("제보는 1번만 가능합니다.");
        }
    });
    button4.addEventListener("click", function () {
        if (!doubleSubmitCheck()) {
            alert("제보 완료!");
            textHolder4.innerHTML = ++count_arr[3];
        } else if (doubleSubmitCheck()) {
            alert("제보는 1번만 가능합니다.");
        }

    });
    button5.addEventListener("click", function () {
        if (!doubleSubmitCheck()) {
            alert("제보 완료!");
            textHolder5.innerHTML = ++count_arr[4];
        } else if (doubleSubmitCheck()) {
            alert("제보는 1번만 가능합니다.");
        }

    });
    button6.addEventListener("click", function () {
        if (!doubleSubmitCheck()) {
            alert("제보 완료!");
            textHolder6.innerHTML = ++count_arr[5];
        } else if (doubleSubmitCheck()) {
            alert("제보는 1번만 가능합니다.");
        }

    });
}

localStorage.setItem("data1", count_arr[0]);
localStorage.setItem("data2", count_arr[1]);
localStorage.setItem("data3", count_arr[2]);
localStorage.setItem("data4", count_arr[3]);
localStorage.setItem("data5", count_arr[4]);
localStorage.setItem("data6", count_arr[5]);
var arr = [];


// 입력값을 메인 페이지에 표시하는 함수
function loaded() {
    let tmp;
    const data_1 = localStorage.getItem("data1");
    const data_2 = localStorage.getItem("data2");
    const data_3 = localStorage.getItem("data3");
    const data_4 = localStorage.getItem("data4");
    const data_5 = localStorage.getItem("data5");
    const data_6 = localStorage.getItem("data6");


    arr.push(data_1);
    arr.push(data_2);
    arr.push(data_3);
    arr.push(data_4);
    arr.push(data_5);
    arr.push(data_6);


    // 입력값의 최대값 탐색
    for(let j=0; j<arr.length; j++) {
        tmp = 0;
        if(tmp < arr[j]){
            switch(j) {
                case 0:
                    tmp = arr[0];
                    continue;
                case 1:
                    tmp = arr[1];
                    continue;
                case 2:
                    tmp = arr[2];
                    continue;
                case 3:
                    tmp = arr[3];
                    continue;
                case 4:
                    tmp = arr[4];
                    continue;
                case 5:
                    tmp = arr[5];

            }
        }
    }
    return tmp;
}
function viewCount(data){
    var a = loaded();
    for(let i=0; i<arr.length; i++) {
        if(a === arr[i]) {
            data = document.getElementsByTagName("img");
            return data.appendChild(arr[i]);
            
        }
    }
}


// function notDuplicate1() {
//     document.getElementById('button1').onclick = null;
//     window.alert("제보 횟수는 1번만 가능합니다.");
// }
// function notDuplicate2() {
//     document.getElementById('button2').onclick = null;
//     window.alert("제보 횟수는 1번만 가능합니다.");
// }
// function notDuplicate3() {
//     document.getElementById('button3').onclick = null;
//     window.alert("제보 횟수는 1번만 가능합니다.");
// }
// function notDuplicate4() {
//     document.getElementById('button4').onclick = null;
//     window.alert("제보 횟수는 1번만 가능합니다.");
// }
// function notDuplicate5() {
//     document.getElementById('button5').onclick = null;
//     window.alert("제보 횟수는 1번만 가능합니다.");
// }
// function notDuplicate6() {
//     document.getElementById('button6').onclick = null;
//     window.alert("제보 횟수는 1번만 가능합니다.");
// }
//
// function ii() {
//     var tmpdata = fs.readFileSync("test.json");
//     alert(tmpdata);
//
// }

// export default function ii() {
//     var fs = require('fs');
//
//     var data = '{ "id1": "0","id2": "0","id3": "0","id4": "0","id5": "0","id6": "0" }';
//     var parsingData = JSON.parse(data);
//     for (let i = 0; i < parsingData.length; i++) {
//         countArray[i].addEventListener("click", function () {
//             if (click_1.onclick) {
//                 let tmp = (parsingData.id1)++;
//                 delete parsingData.id1;
//                 parsingData.id1 = tmp;
//                 alert("완료");
//
//             } else if (click_2.onclick) {
//                 let tmp = (parsingData.id2)++;
//                 delete parsingData.id2;
//                 parsingData.id2 = tmp;
//                 alert("완료");
//
//             } else if (click_3.onclick) {
//                 let tmp = (parsingData.id3)++;
//                 delete parsingData.id3;
//                 parsingData.id3 = tmp;
//                 alert("완료");
//             } else if (click_4.onclick) {
//                 let tmp = (parsingData.id4)++;
//                 delete parsingData.id4;
//                 parsingData.id4 = tmp;
//                 alert("완료");
//             } else if (click_5.onclick) {
//                 let tmp = (parsingData.id5)++;
//                 delete parsingData.id5;
//                 parsingData.id5 = tmp;
//                 alert("완료");
//
//
//             } else if (click_6.onclick) {
//                 let tmp = (parsingData.id6)++;
//                 delete parsingData.id6;
//                 parsingData.id6 = tmp;
//                 alert("완료");
//             }
//
//         });
//
//     }
//     return fs.writeFileSync("test.json", JSON.stringify(parsingData));
// }
