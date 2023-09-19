// Write your solution in this file!
/* you got it */
const employee = {
    name: "Bob",
    streetAddress: 
    `123 Fourth Street\n
    Potatoville, USA`
}
function updateEmployeeWithKeyAndValue(employee,key,value){
    return {
        ...employee,
        [key]: value
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee,key){
    const newEmp = {...employee};
    delete newEmp[key];
    return newEmp;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}