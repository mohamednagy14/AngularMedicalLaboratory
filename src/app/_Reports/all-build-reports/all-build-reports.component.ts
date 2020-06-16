import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-all-build-reports',
  templateUrl: './all-build-reports.component.html',
  styleUrls: ['./all-build-reports.component.css']
})
export class AllBuildReportsComponent implements OnInit {
  viewerContainerStyle = {
    position: 'relative',
    width: '1000px',
    height: '800px',
    ['font-family']: 'ms sans serif'};
  constructor() { }

  ngOnInit(): void {
  }

}
