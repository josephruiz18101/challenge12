// helpers/prompts.js
const inquirer = require('inquirer');

async function mainMenu() {
   inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View All Departments',
      'View All Roles',
      'View All Employees',
      'Add Department',
      'Add Role',
      'Add Employee',
      'Update Employee Role',
      'Exit'
    ]
  })
  .then((answers)=> {
    console.log(answers)
    return answers
  })
}

function departmentPrompt() {
  return inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'Enter the name of the department:'
  });
}

function rolePrompt() {
  return inquirer.prompt([
    { type: 'input', name: 'title', message: 'Enter the title of the role:' },
    { type: 'input', name: 'salary', message: 'Enter the salary for this role:' },
    { type: 'input', name: 'department_id', message: 'Enter the department ID for this role:' }
  ]);
}

function employeePrompt() {
  return inquirer.prompt([
    { type: 'input', name: 'first_name', message: 'Enter the employee’s first name:' },
    { type: 'input', name: 'last_name', message: 'Enter the employee’s last name:' },
    { type: 'input', name: 'role_id', message: 'Enter the role ID for this employee:' },
    { type: 'input', name: 'manager_id', message: 'Enter the manager ID for this employee (optional):' }
  ]);
}

function updateRolePrompt() {
  return inquirer.prompt([
    { type: 'input', name: 'employee_id', message: 'Enter the employee ID:' },
    { type: 'input', name: 'new_role_id', message: 'Enter the new role ID:' }
  ]);
}

module.exports = { mainMenu, departmentPrompt, rolePrompt, employeePrompt, updateRolePrompt };
