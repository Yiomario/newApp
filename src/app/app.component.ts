import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Profesor', url: '/profesor', icon: 'person' },
    { title: 'Alumno', url: '/alumno', icon: 'people' },
    { title: 'login', url: '/login', icon: 'people' },
    { title: 'bienvenido', url: '/bienvenido', icon: 'people' },
    { title: 'ingreso', url: '/cards', icon: 'school' },
  ];
  public labels = [];
  constructor() {}
}
