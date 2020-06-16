import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorProfileComponent } from './Features/Doctor/doctor-profile/doctor-profile.component';
import { AddResultComponent } from './Features/Doctor/add-result/add-result.component';
import { EditResultComponent } from './Features/Doctor/edit-result/edit-result.component';
import { AddDepartmentComponent } from './Features/Admin/add-department/add-department.component';
import { AddDispatureComponent } from './Features/Admin/add-dispature/add-dispature.component';
import { addEmployeeComponent } from './Features/Admin/add-employee/add-employee.component';
import { AddJobComponent } from './Features/Admin/add-job/add-job.component';
import { AddTestComponent } from './Features/Admin/add-test/add-test.component';
import { AdminLayoutComponent } from './Features/Admin/admin-layout/admin-layout.component';
import { BillListComponent } from './Features/Admin/bill-list/bill-list.component';
import { DeleteDepartmentComponent } from './Features/Admin/delete-department/delete-department.component';
import { DeleteDispatcherComponent } from './Features/Admin/delete-dispatcher/delete-dispatcher.component';
import { DeleteEmployeeComponent } from './Features/Admin/delete-employee/delete-employee.component';
import { DeleteJobComponent } from './Features/Admin/delete-job/delete-job.component';
import { DeleteTestComponent } from './Features/Admin/delete-test/delete-test.component';
import {AdminProfileComponent}from './Features/Admin/admin-profile/admin-profile.component';
/*import { AdminProfileComponent } from './Features/Admin/admin-profile/admin-profile.component';*/
import { EditTestComponent } from './Features/Admin/edit-test/edit-test.component';
import {EditJobComponent} from './Features/Admin/edit-job/edit-job.component';
import { EditEmployeeComponent } from './Features/Admin/edit-employee/edit-employee.component';
import { EditDispatcherComponent } from './Features/Admin/edit-dispatcher/edit-dispatcher.component';
import { EditDepartmentComponent } from './Features/Admin/edit-department/edit-department.component';
import { ListTestComponent } from './Features/Admin/list-test/list-test.component';
// import { ListTestComponent } from './Features/_Reports/list-test/list-test.component';
import { ListDepartmentComponent } from './Features/Admin/list-department/list-department.component';
import { ListEmployeeComponent } from './Features/Admin/list-employee/list-employee.component';
import { ListJobComponent } from './Features/Admin/list-job/list-job.component';
import { ListPatientsComponent } from './Features/Admin/list-patients/list-patients.component';
import { AddBillComponent } from './Features/dispatcher/add-bill/add-bill.component';
import { PatientResultComponent } from './Features/Patient/patient-result/patient-result.component';
import { LoginComponent } from './Features/shared/login/login.component';
import { PatientRegisterComponent } from './Features/shared/patient-register/patient-register.component';
import { TestsListComponent } from './Features/shared/tests-list/tests-list.component';
import { HeaderComponent } from './Home/header/header.component';
/*import { HomeComponent } from './Home/home/home.component';*/
import{HomeComponent} from './Home/home/home.component';
import {DoctorLayoutComponent} from './Features/Doctor/doctor-layout/doctor-layout.component';
import {DispatcherLayoutComponent} from './Features/dispatcher/dispatcher-layout/dispatcher-layout.component';
import {DispatcherProfileComponent} from './Features/dispatcher/dispatcher-profile/dispatcher-profile.component';
import { DeletePatientComponent } from './Features/Admin/delete-patient/delete-patient.component';
import { AllBuildReportsComponent } from './_Reports/all-build-reports/all-build-reports.component';
import { PatientPercentAccordingToAgeComponent } from './_Reports/patient-percent-according-to-age/patient-percent-according-to-age.component';
import { PatientPercentAccordingToDateComponent } from './_Reports/patient-percent-according-to-date/patient-percent-according-to-date.component';
import { PatientPercentAccordingToGenderComponent } from './_Reports/patient-percent-according-to-gender/patient-percent-according-to-gender.component';
import { ResultReportComponent } from './_Reports/result-report/result-report.component';
import { SearchBillReportComponent } from './_Reports/search-bill-report/search-bill-report.component';
import { SearchResultReportComponent } from './_Reports/search-result-report/search-result-report.component';
import { TestReportComponent } from './_Reports/test-report/test-report.component';
import { ReportsComponent } from './_Reports/reports/reports.component';
import { PatientReportComponent } from './_Reports/patient-report/patient-report.component';
import { TestsListReportComponent } from './_Reports/tests-list-report/tests-list-report.component';



const routes: Routes = [
  // admin Routes
  { path: 'admin/ListDepartment/admin/AddDepartment', component: AddDepartmentComponent },
  { path: 'admin/AddDispature', component: AddDispatureComponent },
  { path: 'admin/ListEmployee/admin/AddEmployee', component: addEmployeeComponent },
  { path: 'admin/ListJob/admin/AddJob', component: AddJobComponent },
  { path: 'admin/ListTest/admin/AddTest', component: AddTestComponent },
  { path: 'admin/AdminLayout', component: AdminLayoutComponent },
  { path: 'admin/ListDepartment/admin/DeleteDepartment/:id', component: DeleteDepartmentComponent },
  { path: 'admin/DeleteDispatcher/:id', component: DeleteDispatcherComponent },
  { path: 'admin/ListEmployee/admin/DeleteEmployee/:id', component: DeleteEmployeeComponent },
  { path: 'admin/ListJob/admin/DeleteJob/:id', component: DeleteJobComponent },
  { path: 'admin/ListTest/admin/DeleteTest/:id', component: DeleteTestComponent },
  { path: 'admin/ListPatients/admin/DeletePatient/:id', component: DeletePatientComponent },
  
  {path:'admin/profile',component:AdminProfileComponent},
  { path: 'admin/BillList', component: BillListComponent },
  { path: 'admin/ListDepartment/admin/EditDepartment/:id', component: EditDepartmentComponent },
  { path: 'admin/EditDispatcher/:id', component: EditDispatcherComponent },
  { path: 'admin/ListEmployee/admin/EditEmployee/:id', component: EditEmployeeComponent },
  { path: 'admin/ListJob/admin/EditJob/:id', component: EditJobComponent },
  { path: 'admin/EditTest/:id', component: EditTestComponent },
  { path: 'admin/ListDepartment', component: ListDepartmentComponent },
  { path: 'admin/ListPatients', component: ListPatientsComponent },
  { path: 'admin/ListEmployee', component: ListEmployeeComponent },
  { path: 'admin/ListJob', component: ListJobComponent },
  { path: 'admin/ListTest', component: ListTestComponent },
 
  // dispatcher
  { path: 'dispatcher/AddBill', component: AddBillComponent },
  {path:'dispatcher/layout',component:DispatcherLayoutComponent},
  {path:'dispatcher/profile',component:DispatcherProfileComponent},

  // doctor
  { path: 'doctor/DoctorProfile', component: DoctorProfileComponent },
  { path: 'doctor/AddResult', component: AddResultComponent },
  { path: 'doctor/EditResult/:id', component: EditResultComponent },
  
  // patient
  { path: 'patient/PatientResult', component: PatientResultComponent },
  // ------------- --------------//
  // shared
  { path: 'shared/Login', component: LoginComponent},
  { path: 'shared/PatientRegister', component: PatientRegisterComponent },
  { path: 'shared/TestsList', component: TestsListComponent },
  // home
  /*{ path: 'home/Header', component: HeaderComponent },*/
  { path: '', component: HomeComponent },
  {path:'doctor/Doctor',component:DoctorLayoutComponent},
  //Reports
  {path:'reports/Reports',component:ReportsComponent},
// 10 routes
  {path:'reports/Reports/reports/AllBuildReports',component:AllBuildReportsComponent},
  {path:'reports/Reports/reports/PatientPercentAccordingToAge',component:PatientPercentAccordingToAgeComponent},
  {path:'reports/Reports/reports/PatientPercentAccordingToDate',component:PatientPercentAccordingToDateComponent},
  {path:'reports/Reports/reports/PatientPercentAccordingToGender',component:PatientPercentAccordingToGenderComponent},
  {path:'reports/Reports/reports/ResultReport',component:ResultReportComponent},
  {path:'reports/Reports/reports/SearchBillReport',component:SearchBillReportComponent},
  {path:'reports/Reports/reports/SearchResultReport',component:SearchResultReportComponent},
  {path:'reports/Reports/reports/TestsListReport',component:TestsListReportComponent},
  {path:'reports/Reports/reports/TestReport',component:TestReportComponent},
  {path:'reports/Reports/reports/PatientReport',component:PatientReportComponent},



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
