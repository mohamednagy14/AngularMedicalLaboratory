import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TelerikReportingModule} from '@progress/telerik-angular-report-viewer';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {HttpClientModule} from '@angular/common/http';


import {AppRoutingModule} from './app-routing.module';
import {AddDepartmentComponent} from './Features/Admin/add-department/add-department.component';
import {AddDispatureComponent} from './Features/Admin/add-dispature/add-dispature.component';
import {addEmployeeComponent} from './Features/Admin/add-employee/add-employee.component';
import {AddJobComponent} from './Features/Admin/add-job/add-job.component';
import {AddTestComponent} from './Features/Admin/add-test/add-test.component';
import {BillListComponent} from './Features/Admin/bill-list/bill-list.component';
import {DeleteDepartmentComponent} from './Features/Admin/delete-department/delete-department.component';
import {DeleteEmployeeComponent} from './Features/Admin/delete-employee/delete-employee.component';
import {DeleteDispatcherComponent} from './Features/Admin/delete-dispatcher/delete-dispatcher.component';
import {ListEmployeeComponent} from './Features/Admin/list-employee/list-employee.component';
import {EditEmployeeComponent} from './Features/Admin/edit-employee/edit-employee.component';
import {EditDispatcherComponent} from './Features/Admin/edit-dispatcher/edit-dispatcher.component';
import {EditDepartmentComponent} from './Features/Admin/edit-department/edit-department.component';
import {EditJobComponent} from './Features/Admin/edit-job/edit-job.component';
import {EditTestComponent} from './Features/Admin/edit-test/edit-test.component';
import {ListTestComponent} from './Features/Admin/list-test/list-test.component';
import {ListPatientsComponent} from './Features/Admin/list-patients/list-patients.component';
import {DminProfileComponent} from './Features/Admin/dmin-profile/dmin-profile.component';
import {AdminLayoutComponent} from './Features/Admin/admin-layout/admin-layout.component';
import {HomeComponent} from './Home/home/home.component';
import {DoctorProfileComponent} from './Features/Doctor/doctor-profile/doctor-profile.component';
import {DeleteJobComponent} from './Features/Admin/delete-job/delete-job.component';
import {DeleteTestComponent} from './Features/Admin/delete-test/delete-test.component';
import {ListDepartmentComponent} from './Features/Admin/list-department/list-department.component';
import {ListJobComponent} from './Features/Admin/list-job/list-job.component';
import {AddResultComponent} from './Features/Doctor/add-result/add-result.component';
import {EditResultComponent} from './Features/Doctor/edit-result/edit-result.component';
import {PatientResultComponent} from './Features/Patient/patient-result/patient-result.component';
import {AddBillComponent} from './Features/dispatcher/add-bill/add-bill.component';
import {LoginComponent} from './Features/shared/login/login.component';
import {PatientRegisterComponent} from './Features/shared/patient-register/patient-register.component';
import {TestsListComponent} from './Features/shared/tests-list/tests-list.component';
import {HeaderComponent} from './Home/header/header.component';
import {DoctorLayoutComponent} from './Features/Doctor/doctor-layout/doctor-layout.component';
import {DispatcherLayoutComponent} from './Features/dispatcher/dispatcher-layout/dispatcher-layout.component';
import {DispatcherProfileComponent} from './Features/dispatcher/dispatcher-profile/dispatcher-profile.component';
import {DeletePatientComponent} from './Features/Admin/delete-patient/delete-patient.component';
import {AdminProfileComponent} from './Features/Admin/admin-profile/admin-profile.component';
import {ReportsComponent} from './_Reports/reports/reports.component';
import {AllBuildReportsComponent} from './_Reports/all-build-reports/all-build-reports.component';
import {PatientReportComponent} from './_Reports/patient-report/patient-report.component';
// tslint:disable-next-line:max-line-length
import {PatientPercentAccordingToAgeComponent} from './_Reports/patient-percent-according-to-age/patient-percent-according-to-age.component';
import {PatientPercentAccordingToDateComponent} from './_Reports/patient-percent-according-to-date/patient-percent-according-to-date.component';
import {PatientPercentAccordingToGenderComponent} from './_Reports/patient-percent-according-to-gender/patient-percent-according-to-gender.component';
import {ResultReportComponent} from './_Reports/result-report/result-report.component';
import {SearchBillReportComponent} from './_Reports/search-bill-report/search-bill-report.component';
import {SearchResultReportComponent} from './_Reports/search-result-report/search-result-report.component';
import {TestReportComponent} from './_Reports/test-report/test-report.component';
import {TestsListReportComponent} from './_Reports/tests-list-report/tests-list-report.component';


@NgModule({
  declarations: [
    AppComponent,
    AddDepartmentComponent,
    AddDispatureComponent,
    addEmployeeComponent,
    AddJobComponent,
    AddTestComponent,
    DminProfileComponent,
    BillListComponent,
    DeleteDepartmentComponent,
    DeleteEmployeeComponent,
    DeleteDispatcherComponent,
    ListEmployeeComponent,
    EditEmployeeComponent,
    EditDispatcherComponent,
    EditDepartmentComponent,
    EditJobComponent,
    EditTestComponent,
    ListTestComponent,
    ListPatientsComponent,
    AdminLayoutComponent,
    DminProfileComponent,
    HomeComponent,
    DoctorProfileComponent,
    DeleteJobComponent,
    DeleteTestComponent,
    ListDepartmentComponent,
    ListJobComponent,
    AddResultComponent,
    EditResultComponent,
    PatientResultComponent,
    AddBillComponent,
    LoginComponent,
    PatientRegisterComponent,
    TestsListComponent,
    HeaderComponent,
    DoctorLayoutComponent,
    DispatcherLayoutComponent,
    DispatcherProfileComponent,
    DeletePatientComponent,
    AdminProfileComponent,
    ReportsComponent,
    AllBuildReportsComponent,
    PatientReportComponent,
    PatientPercentAccordingToAgeComponent,
    PatientPercentAccordingToDateComponent,
    PatientPercentAccordingToGenderComponent,
    ResultReportComponent,
    SearchBillReportComponent,
    SearchResultReportComponent,
    TestReportComponent,
    TestsListReportComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    HttpClientModule,
    TelerikReportingModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
