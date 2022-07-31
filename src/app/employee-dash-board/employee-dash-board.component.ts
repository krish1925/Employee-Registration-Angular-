import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employee-dash-board.model';
@Component({
  selector: 'app-employee-dash-board',
  templateUrl: './employee-dash-board.component.html',
  styleUrls: ['./employee-dash-board.component.css']
})
export class EmployeeDashBoardComponent implements OnInit {
  formValue !: FormGroup;
  employeeModelObj : EmployeeModel = new EmployeeModel();
  employeeData !: any;
  showAddd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      FirstName : [''],
      LastName : [''],
      Email : [''],
      Mobile : [''],
      Department : [''],
      Salary : ['']
    })
    this.getAllEmployees();
  }
  postEmployeeDetails(){
    this.employeeModelObj.FirstName = this.formValue.value.FirstName;
    this.employeeModelObj.LastName = this.formValue.value.LastName;
    this.employeeModelObj.Email = this.formValue.value.Email;
    this.employeeModelObj.Mobile = this.formValue.value.Mobile;
    this.employeeModelObj.Department = this.formValue.value.Department;
    this.employeeModelObj.Salary = this.formValue.value.Salary;
    this.api.postEmployee(this.employeeModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Employee Added Successfully");
      let ref= document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllEmployees();
    },
  err=>{
    alert("Something Went Wrong");
  })
  }
  getAllEmployees(){
    this.api.getEmployee()
    .subscribe(res=>{
      this.employeeData = res;
    })
  }
  deleteEmployee(row: any){
    this.api.deleteEmployee(row.id)
    .subscribe(res=>{
      alert("Employee Deleted")
      this.getAllEmployees();
    })
  }
  onEdit(row:any){
    this.clickupdate();
    this.employeeModelObj.id = row.id;
    this.formValue.controls["FirstName"].setValue(row.FirstName);
    this.formValue.controls["LastName"].setValue(row.LastName);
    this.formValue.controls["Email"].setValue(row.Email);
    this.formValue.controls["Mobile"].setValue(row.Mobile);
    this.formValue.controls["Department"].setValue(row.Department);
    this.formValue.controls["Salary"].setValue(row.Salary)
  }
  updateEmployeeDetails(){
    this.employeeModelObj.FirstName = this.formValue.value.FirstName;
    this.employeeModelObj.LastName = this.formValue.value.LastName;
    this.employeeModelObj.Email = this.formValue.value.Email;
    this.employeeModelObj.Mobile = this.formValue.value.Mobile;
    this.employeeModelObj.Department = this.formValue.value.Department;
    this.employeeModelObj.Salary = this.formValue.value.Salary;
    this.api.updateEmployee(this.employeeModelObj, this.employeeModelObj.id)
    .subscribe(res=>{
      alert("Updated Successfully");
      let ref= document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllEmployees();
    },
    err=>{
      alert("Error");
    })
  }
  clickadd(){
    this.formValue.reset();
    this.showAddd = true;
    this.showUpdate = false;
  }
  clickupdate(){
    this.showAddd = false;
    this.showUpdate = true;
  }
}
