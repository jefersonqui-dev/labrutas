import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-table-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './table-user.html',
  styleUrl: './table-user.css'
})
export class TableUser {
  usuarios: any[] = [];

  constructor(private usuarioService: UsuariosService){
    this.usuarios = this.usuarioService.obtenerUsuarios(); 
  }
}
