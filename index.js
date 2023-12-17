let employee = {
    name: "Kelvin",
    streetAddress: "00100"
}


function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
console.log(updateEmployeeWithKeyAndValue(employee, "name", "Sam"))




function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'wewe', 'mimi'))




function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee}
    newEmployee[key] 
    delete newEmployee[key]
    return newEmployee
}
console.log(deleteFromEmployeeByKey(employee, 'name'))




function destructivelyDeleteFromEmployeeByKey(employee, key) {
    employee[key]
    delete employee[key]
    return employee
}
