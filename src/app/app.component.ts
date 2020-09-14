import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inProgressTitle = 'first title';

  changeTitle(): any {
    this.inProgressTitle = 'second title';
  }
}
