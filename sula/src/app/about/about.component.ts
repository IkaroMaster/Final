import { Component, OnInit } from '@angular/core';
import { TitleService } from '../servicios/title.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private ts: TitleService) { }

  ngOnInit() {
    this.ts.setTitle('About')
  }

}