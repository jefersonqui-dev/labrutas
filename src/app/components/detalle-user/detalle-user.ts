import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios-service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-detalle-user',
  imports: [CommonModule],
  templateUrl: './detalle-user.html',
  styleUrl: './detalle-user.css'
})
export class DetalleUser {
  usuario: any;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuariosService
  ){
    this.route.paramMap.subscribe((params) => {
      const correo = params.get('correo');
      this.usuario = this.usuarioService
      .obtenerUsuarios()
      .find((u) => u.correo === correo);
    }); 
  }
}
