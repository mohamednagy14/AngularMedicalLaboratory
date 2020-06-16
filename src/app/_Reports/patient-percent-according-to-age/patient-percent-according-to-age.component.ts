import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-patient-percent-according-to-age',
  templateUrl: './patient-percent-according-to-age.component.html',
  styleUrls: ['./patient-percent-according-to-age.component.css']
})
export class PatientPercentAccordingToAgeComponent implements OnInit {
  viewerContainerStyle = {
    position: 'relative',
    width: '1000px',
    height: '800px',
    ['font-family']: 'ms sans serif'};
  constructor() { }

  ngOnInit(): void {
  }

}
