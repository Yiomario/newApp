import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Profesor', url: '/profesor', icon: 'person' },
    { title: 'Asistencia', icon: 'people' },
    { title: 'Notas', icon: 'reader' },
    { title: 'Configuracion', url: '/bienvenido', icon: 'people' },
    { title: 'ingreso', url: '/cards', icon: 'school' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
