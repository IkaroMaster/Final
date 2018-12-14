import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private T: Title) { }

  setTitle (title: string)
  {
    this.T.setTitle(title);
  }

}