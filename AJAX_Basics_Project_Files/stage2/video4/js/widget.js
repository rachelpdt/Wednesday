var xhr = new XMLHTTPRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4){
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; 1 += 1) {
        if (employees[i].inoffie === true) {
          statusHTML += '<li class="in">';
        } else{
          statusHTML += '<li class="out">';
        }
        statusHTML += employees[i].name;
        statusHTML += '</li>';
    }
    statusHTML+= '</ul>';
    document.getElementByID('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();
