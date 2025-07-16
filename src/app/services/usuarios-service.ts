import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

    constructor(){}

    obtenerUsuarios(){
      return [
      {nombre: 'Juan Perez', correo: 'juan.perez@example.com', fechaNacimiento: '1990-05-15', perfil: 'Administrador'},
      {nombre: 'Maria Gomez', correo: 'maria.gomez@example.com', fechaNacimiento: '1985-08-20', perfil: 'Usuario'},
      {nombre: 'Pedro Rodriguez', correo: 'pedro.rodriguez@example.com', fechaNacimiento: '1992-03-10', perfil: 'Usuario'},
      {nombre: 'Ana Martinez', correo: 'ana.martinez@example.com', fechaNacimiento: '1988-11-25', perfil: 'Usuario'},
      {nombre: 'Carlos Lopez', correo: 'carlos.lopez@example.com', fechaNacimiento: '1995-07-05', perfil: 'Usuario'},
      {nombre: 'Laura Garcia', correo: 'laura.garcia@example.com', fechaNacimiento: '1993-04-18', perfil: 'Usuario'},
      {nombre: 'Luis Hernandez', correo: 'luis.hernandez@example.com', fechaNacimiento: '1991-09-30', perfil: 'Usuario'},
      {nombre: 'Sofia Ramirez', correo: 'sofia.ramirez@example.com', fechaNacimiento: '1987-06-12', perfil: 'Usuario'},
      {nombre: 'Juan Perez', correo: 'juan.perez@example.com', fechaNacimiento: '1990-05-15', perfil: 'Administrador'},
      {nombre: 'Maria Gomez', correo: 'maria.gomez@example.com', fechaNacimiento: '1985-08-20', perfil: 'Usuario'},
      ];
    }
}
