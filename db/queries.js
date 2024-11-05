// db/queries.js
const client = require('./connection');

// View all departments
function viewDepartments() {
  return client.query('SELECT * FROM department');
}

// View all roles
function viewRoles() {
  return client.query(`
    SELECT role.id, role.title, department.name AS department, role.salary
    FROM role
    JOIN department ON role.department_id = department.id
  `);
}

// View all employees
function viewEmployees() {
  return client.query(`
    SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary,
           manager.first_name AS manager_first, manager.last_name AS manager_last
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee AS manager ON employee.manager_id = manager.id
  `);
}

// Add a new department
function addDepartment(name) {
  return client.query('INSERT INTO department (name) VALUES ($1) RETURNING *', [name]);
}

// Add a new role
function addRole(title, salary, department_id) {
  return client.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *', [title, salary, department_id]);
}

// Add a new employee
function addEmployee(first_name, last_name, role_id, manager_id) {
  return client.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *', [first_name, last_name, role_id, manager_id]);
}

// Update an employee role
function updateEmployeeRole(employee_id, new_role_id) {
  return client.query('UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *', [new_role_id, employee_id]);
}

module.exports = { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole };
