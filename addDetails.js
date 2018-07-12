let sno = 1;
let status;
let state = [];
let flag;
function addRow() {

    let nName = document.getElementById('name').value;
    let nAge = document.getElementById('age').value;

    let cntnt = document.getElementsByClassName("content");

    var table = document.getElementsByClassName('tableshow')[0];

    var newRow = table.insertRow(table.rows.length);

    // add cells to the row
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);

    // add values to the cells
    if (nName.match(/[aeiouAEIOU]/) && nAge < "18") {
        status = "Vowel present and age is less than 18";
        localStorage.setItem("state", status);

        state.push(status);
        // console.log(state.pop());
        cntnt.innerHTML = status;

    }
    else if (nName.match(/[aeiouAEIOU]/) && nAge >= "18") {
        status = "Vowel present and age is more than 18";
        localStorage.setItem("state", status);
        state.push(status);
        cntnt.innerHTML = status;
    }
    else if (!nName.match(/[aeiouAEIOU]/) && nAge >= "18") {
        status = "Vowel absent and age is more than 18";
        localStorage.setItem("state", status);
        state.push(status);
        cntnt.innerHTML = status;
    }
    else {
        status = "Vowel absent and age is less than 18";
        localStorage.setItem("state", status);
        state.push(status);
        cntnt.innerHTML = status;
    }
    localStorage.setItem("sno", sno);
    localStorage.setItem("name", nName);
    localStorage.setItem("age", nAge);


    //   cel1.innerHTML = sno;
    //   cel2.innerHTML = nName;
    //   cel3.innerHTML = nAge;
    //   cel4.innerHTML = status;
    cel1.innerHTML = localStorage.getItem("sno");
    cel2.innerHTML = localStorage.getItem("name");
    cel3.innerHTML = localStorage.getItem("age");
    cel4.innerHTML = localStorage.getItem("state");


    sno++;
    showAlert(status, nName, nAge);
    dispOnSecondPage();
}

function showData() {
    alert(localStorage.getItem("state") + localStorage.getItem("sno") + localStorage.getItem("name") + localStorage.getItem("age"));
}

function showAlert(status, name, age) {
    var des = document.getElementById('des');
    des.innerHTML = name.concat(" is ", age, " years old.")
    var element = document.getElementById('h3');
    console.log(status);
    element.innerHTML = status;
}

function dispOnSecondPage() {

    console.log("Test Log");

    let cntnt = document.getElementsByClassName("content");

    var table = document.getElementsByClassName('table2')[0];

    var newRow = table.insertRow(table.rows.length / 2 + 1);

    // add cells to the row
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);


    cel1.innerHTML = localStorage.getItem("sno");
    cel2.innerHTML = localStorage.getItem("name");
    cel3.innerHTML = localStorage.getItem("age");
    cel4.innerHTML = localStorage.getItem("state");


    sno++;
    //   showAlert(status,nName,nAge);
}