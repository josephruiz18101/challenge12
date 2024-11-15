// index.js
const { mainMenu, departmentPrompt, rolePrompt, employeePrompt, updateRolePrompt } = require('./helpers/prompts');
const db = require('./db/queries');

async function init() {
  let inProgress = true;
  
  while (inProgress) {
    const { action } = await mainMenu();
    console.log(action)

    switch (action) {
      case 'View All Departments':
        console.table((await db.viewDepartments()).rows);
        break;
      case 'View All Roles':
        console.table((await db.viewRoles()).rows);
        break;
      case 'View All Employees':
        console.table((await db.viewEmployees()).rows);
        break;
      case 'Add Department':
        const { name } = await departmentPrompt();
        await db.addDepartment(name);
        console.log(`Department ${name} added.`);
        break;
      case 'Add Role':
        const roleData = await rolePrompt();
        await db.addRole(roleData.title, roleData.salary, roleData.department_id);
        console.log(`Role ${roleData.title} added.`);
        break;
      case 'Add Employee':
        const employeeData = await employeePrompt();
        await db.addEmployee(employeeData.first_name, employeeData.last_name, employeeData.role_id, employeeData.manager_id || null);
        console.log(`Employee ${employeeData.first_name} ${employeeData.last_name} added.`);
        break;
      case 'Update Employee Role':
        const { employee_id, new_role_id } = await updateRolePrompt();
        await db.updateEmployeeRole(employee_id, new_role_id);
        console.log(`Employee ID ${employee_id} role updated.`);
        break;
      case 'Exit':
        inProgress = false;
        break;
    }
  }
}

init();
