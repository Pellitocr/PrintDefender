import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public showLoading(){

      $("#loading").fadeIn(1);
  

  }
  public hideLoading(){
      $("#loading").fadeOut(500);
  }
}
