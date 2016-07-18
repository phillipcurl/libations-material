// @Author: Phillip Curl <PC>
// @Date:   2016-05-13T21:21:49-04:00
// @Email:  phillipcurl@gmail.com
// @Project: Libations-Portal
// @Last modified by:   PC
// @Last modified time: 2016-05-13T21:26:21-04:00

import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['alert.component.css'],
  inputs: ['message: message','error: error','context: context']
})
export class AlertComponent {
  
  message: string;
  error: string;
  context: string;

  constructor() {}
  
}
