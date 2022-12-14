let obj={};
obj.id=111;
obj.name="killer";
obj.adress="bengaluru";
obj.salary=25410;

for(const key in obj)console.log(obj[key]);

console.log(JSON.stringify(obj));


class Employee{
    constructor(id,name,adress,salary){
        this.empid=id;
        this.empname=name;
        this.empadress=adress;
        this.empsalary=salary;
    }

}
const employeeObj=new Employee(122,"funny","mys",54545)