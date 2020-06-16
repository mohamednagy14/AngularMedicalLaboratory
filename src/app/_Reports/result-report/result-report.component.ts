import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-report',
  templateUrl: './result-report.component.html',
  styleUrls: ['./result-report.component.css']
})
export class ResultReportComponent implements OnInit {
  viewerContainerStyle = {
    position: 'relative',
    width: '1000px',
    height: '800px',
    ['font-family']: 'ms sans serif'};
  constructor() { }

  ngOnInit(): void {
  }

}
