import { Component, OnInit, Input } from '@angular/core';
import { Volet } from '../volet';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-volet-detail',
  templateUrl: './volet-detail.component.html',
  styleUrls: ['./volet-detail.component.css']
})
export class VoletDetailComponent implements OnInit {

  @Input() volet: Volet;

  constructor() { }

  ngOnInit() {
  }

}
