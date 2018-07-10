document.addEventListener("DOMContentLoaded", function(event) { 
    addData();
  });

function showData(){
    addData();
    alert(localStorage.getItem("state")+localStorage.getItem("sno")+localStorage.getItem("name")+localStorage.getItem("age"));
}

function addData(){

     let cntnt = document.getElementsByClassName("content");
      
      var table = document.getElementsByTagName('table')[0];
  
      var newRow = table.insertRow(table.rows.length+2/1);
      
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
      showAlert(status,nName,nAge);
}