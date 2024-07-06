// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const employeeArray = [];

// Get user input to create and return an array of employee objects
const collectEmployees = function() {
  
  let userInput=true;

  while (userInput){
  const firstName = prompt ("What is the employee's first name?");
  const lastName = prompt (`What is ${firstName}'s last name?`);
  const salary = prompt (`What is ${firstName} ${lastName}'s salary?`);

   
    const currentEmployee = {
      firstName: firstName,
      lastName: lastName,
        salary: parseFloat(salary)}

       if (isNaN(salary)) {
      currentEmployee.salary=0;
    }
        employeeArray.push(currentEmployee);

    userInput=confirm("Would you like to add another employee");  
    }
  
        return (employeeArray);
}

// Calculate and display the average salary

const displayAverageSalary = function(employeesArray) {
  let sum=0;
  
 for (let i = 0; i < employeesArray.length; i++){

    sum += parseFloat(employeesArray[i].salary);
 }

  const avgSal=sum/employeesArray.length;
  console.log(`The average salary of our ${employeesArray.length} employee(s) is $${avgSal}`);

}

// Select and display a random employee
const getRandomEmployee = function(employeesArray) {
  const employeeLength = employeesArray.length;
  const randNum = Math.floor(Math.random() * employeeLength)

  const randomEmployeeFirst = employeesArray[randNum].firstName;
  const randomEmployeeLast= employeesArray[randNum].lastName;
  
  console.log(`Congratulations to ${randomEmployeeFirst} ${randomEmployeeLast}, the winner of our random drawing!`)

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
