import { Component } from '@angular/core';


interface Page { //1/----------
  title: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {//2/------------
  title = 'intro-app';
}
