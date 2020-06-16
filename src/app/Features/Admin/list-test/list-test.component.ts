import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/_Services/_Test/test.service';
import { DepartmentService } from 'src/app/_Services/_Department/department.service';

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {

  constructor(private TestService:TestService,private departmentService:DepartmentService) { }

   ngOnInit(): void {
    this.list_Test_dept();
  }
  // array
  listTests:any;
departments:any;
// listTestdept;
async listTest(){
  await this.TestService.getTests().subscribe(data=>{
      this.listTests=data;
      console.log("tests "+this.listTests);
   // alert("ok");
 });
  await this.departmentService.getAllDepartments().subscribe(data=>{
          this.departments=data;
          console.log("departments "+this.departments);
  })
   // await this.list_Test_dept();
 }// end func
async list_Test_dept(){
     this.listTest();


  for(let i=0 ; i<this.listTests.length ; i++)
  {
    for(let j=0;j<this.departments.length;j++)
    {
        if(this.listTests[i].Dep_fk == this.departments[j].dep_Id)
        { console.log(this.departments[j].dep_Id);
          console.log(this.listTests[i].Dep_fk);
          this.departments[i]=this.departments[j].dep_name;
          console.log("this.departments[j].dep_name"+this.departments[j].dep_name);
        }
    }
  }
  console.log("this.departments"+this.departments);
}//end 

  
}
