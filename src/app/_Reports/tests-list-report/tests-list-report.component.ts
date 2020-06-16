import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tests-list-report',
  templateUrl: './tests-list-report.component.html',
  styleUrls: ['./tests-list-report.component.css']
})
export class TestsListReportComponent implements OnInit {
  viewerContainerStyle = {
    position: 'relative',
    width: '1000px',
    height: '800px',
    ['font-family']: 'ms sans serif'};
  constructor() { }

  ngOnInit(): void {
  }

}
