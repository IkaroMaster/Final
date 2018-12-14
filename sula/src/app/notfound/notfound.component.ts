import { Component, OnInit } from '@angular/core';
import { TitleService } from '../servicios/title.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private ts: TitleService) { }

  ngOnInit() {
  	 this.ts.setTitle('Error 404(no se a encontrado)')
  }

}
