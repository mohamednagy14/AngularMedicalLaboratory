import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {PatientserviceService} from '../../services/patientservice.service';

@Component({
  selector: 'app-search-bill-report',
  templateUrl: './search-bill-report.component.html',
  styleUrls: ['./search-bill-report.component.css'],
  providers: [PatientserviceService]
})
export class SearchBillReportComponent implements OnInit {
  title = 'Bill Search For Specific Patient';
  viewerContainerStyle = {
    position: 'relative',
    width: '1000px',
    height: '800px',
    ['font-family']: 'ms sans serif'};
  searchTerm: FormControl = new FormControl();
  myBooks = [] as any;
  constructor(private service: PatientserviceService) { }

  ngOnInit() {
    this.searchTerm.valueChanges.subscribe(
      term => {
        if (term != '') {
          this.service.search(term).subscribe(
            data => {
              this.myBooks = data as any[];
              //console.log(data[0].pat_f_name);
            });
        }
      });
  }
}
