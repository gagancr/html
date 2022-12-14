class Employee{
    constructor(id,name,adress,salary){
        this.empid=id;
        this.empname=name;
        this.empadress=adress;
        this.empsalary=salary;
    }

}
class EmRepo{
    data=[]

    addEmployee(emp){

        this.data.push(emp);
        
    }
    getAllEmployees(){
        return this.data;
    }
}
let instance=new EmRepo();
instance.addEmployee(new Employee(143,"sanna","mandya",28000));
instance.addEmployee(new Employee(169,"pravin","hassan",23000));
instance.addEmployee(new Employee(143,"parinita","hulyar",30000));

const data =instance.getAllEmployees();
for(const emp of data){
console.log(emp.empid , emp.empname,emp.empadress,emp.empsalary)}
