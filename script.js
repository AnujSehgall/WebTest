let nameList = [];
let table = document.getElementById("UserTable");

function testFunction() {
    let name = document.getElementById("name-input").value;
    let age = document.getElementById("age-input").value;

    insRow(name, age);
}

function insRow(Name, Age) {

    let nName = Name;
    let nAge = Age;
    var new_row = table.rows[1].cloneNode(true);
    // get the total number of rows
    var len = table.rows.length;
    // if(len==0){
    //     let sno = document.getElementById("SeNo");
    //     let Nm = document.getElementById("name-cell");
    //     let Ag = document.getElementById("age-cell");

    //     sno.innerHTML("1");
    //     Nm.innerHTML(nName);
    //     Ag.innerHTML(nAge);

    // }

    // else{
    //    // set the innerHTML of the first row 
    new_row.cells[0].innerHTML = len;

    var inp1 = new_row.cells[1].getElementsByTagName('input')[0];
    inp1.id += len;
    inp1.value = nName;

    var inp2 = new_row.cells[2].getElementsByTagName('input')[0];
    inp2.id += len;
    inp2.value = nAge;
    table.appendChild(new_row);



}