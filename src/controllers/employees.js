'use strict'
const employeeService = require('@services/employee')
const createEmployee = async (req, res) => {
  try {
    const { name, email, age} = req.body
    const newEmploye = { name, email, age }
    const employee = await employeeService.createEmployee(newEmploye)
    return res.json(employee)
  } catch (error) {
    console.error(error)
    return res.status(424).json(error);
  }
}


const getEmployees  = (req, res) =>{ 
    const employee = employeeShema(req.body); 
    return res.send({ hello: 'hello from sample connector, Employees' })
    
    // router.get('/', (req, res) => {
    //     userShema
    //       .find()// metodo para encontar 
    //       .then((data) => res.json(data))
    //       .catch((error) => res.json({ message: error }));
    //   })
  }

module.exports = {getEmployees, createEmployee}
