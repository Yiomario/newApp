import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  contrasena: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async iniciarSesion() {
    if (this.usuario.trim() === '' || this.contrasena.trim() === '') {
      // Al menos uno de los campos está vacío, mostrar alerta de campo vacío
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos.',
        buttons: ['Aceptar'],
      });

      await alert.present();
    } else {
      // Aquí puedes agregar la lógica para iniciar sesión
      // Por ejemplo, hacer una solicitud a un servicio de autenticación
      // y redirigir al usuario a la página principal si las credenciales son válidas.
    }
  }
}
