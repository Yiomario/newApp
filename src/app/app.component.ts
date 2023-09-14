import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Profesor', url: '/profesor', icon: 'person' },
    { title: 'Asistencia', icon: 'people' },
    { title: 'Notas', icon: 'reader' },
    { title: 'Configuracion', icon: 'construct' },
  ];
  public labels = [];
  nombreUsuario: string = ''; // Propiedad para almacenar el nombre de usuario

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el nombre de usuario de los queryParams
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['nombreUsuario']) {
        this.nombreUsuario = params['nombreUsuario'];
      }
    });
  }
}
