const employeeCtrl = {};
const Employee = require("../models/Employee.js");


employeeCtrl.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
  
};

employeeCtrl.createEmployee = async (req, res) => {
  
  res.send({message: 'employee created'});
  const newEmployee = new Employee(req.body);
  console.log(newEmployee)
  await newEmployee.save()
}

employeeCtrl.getEmployee = async (req, res) => {
 
  const employee = await Employee.findById(req.params.id)
  res.send(employee)
}

employeeCtrl.editEmployee = async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body)
  res.json({status: 'Employee updated'})
}

employeeCtrl.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id)
  res.json({status: 'Employee Deleted'})
}

module.exports = employeeCtrl;


/*const employeesCtrl= { };

const Employee = require('../models/Employee');

employeesCtrl.getEmployees = async  (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};

employeesCtrl.createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body);

    await newEmployee.save();

    res.json({status: 'Employee created'});
};

employeesCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.send(employee);
};

employeesCtrl.editEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Employee updated'})
};

employeesCtrl.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status: 'Employee deleted'})
};


module.exports = employeesCtrl;*/