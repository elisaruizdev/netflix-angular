import { Component, Input, OnInit } from '@angular/core';
import { Comedy,} from '../models/netflix-model';

@Component({
  selector: 'app-comedy',
  templateUrl:'./comedy.component.html',
  styleUrls: ['./comedy.component.scss']
})
export class ComedyComponent implements OnInit {
@Input() public comedy!: Comedy;

  constructor() { }

  ngOnInit(): void {
  }

}
