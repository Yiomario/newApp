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
      // Supongamos que el inicio de sesión es exitoso y quieres pasar el nombre de usuario a la página de inicio
      // Puedes hacerlo usando el servicio de enrutamiento y queryParams
      this.router.navigate(['/home'], {
        queryParams: {
          nombreUsuario: this.usuario,
        },
      });
    }
  }
}
