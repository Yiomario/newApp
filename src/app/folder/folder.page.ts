import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string = '';
  public nombreUsuario: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el parámetro 'id' de la URL
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') || '';

    // Obtener el nombre de usuario de los queryParams
    const nombreUsuarioParam = this.activatedRoute.snapshot.queryParamMap.get('nombreUsuario');
    if (nombreUsuarioParam) {
      this.nombreUsuario = nombreUsuarioParam;
    }
  }
}



