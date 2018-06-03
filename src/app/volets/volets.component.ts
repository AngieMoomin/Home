import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Volet} from '../volet';

import { VoletService } from '../volet.service';

@Component({
  selector: 'app-volets',
  templateUrl: './volets.component.html',
  styleUrls: ['./volets.component.css']
})
export class VoletsComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  selectedVolet: Volet;

  constructor(private _formBuilder: FormBuilder, private voletService: VoletService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  onSelect(id: number): void {
    this.voletService.getVolet(id).subscribe(volet => this.selectedVolet = volet);
  }

}
