import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello123 {{value}}</div>`,
})
export class AppComponent {
  value = 'World';
}
