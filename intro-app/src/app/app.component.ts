import { Component } from '@angular/core';


interface Page { //1/----------
  title: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'intro-app';
  account: Page = { //2/------------

    title: 'app-account'
  };
  dashboard: Page = {

    title: 'app-dashboard'
  };

  currentPage: Page = {
    title: '',
  };

  changeComponent(cName: string) {
    this.currentPage.title = this.currentPage.title === cName ? '': cName;
  }
}
