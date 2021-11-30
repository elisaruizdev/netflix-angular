import { Component, Input, OnInit } from '@angular/core';
import { Drama } from '../models/netflix-model';

@Component({
  selector: 'app-drama',
  templateUrl: './drama.component.html',
  styleUrls: ['./drama.component.scss']
})
export class DramaComponent implements OnInit {
@Input() public drama!: Drama;
  constructor() { }

  ngOnInit(): void {
  }

}