import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { concat } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private route : Router){}

  home()
  {
    this.route.navigate(['/Home'])
  }
  about()
  {
    this.route.navigate(['/About'])
  }
  contact()
  {
    this.route.navigate(['/Contact'])
  }
}
