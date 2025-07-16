import { Component } from '@angular/core';
//Importa la Clase Router que permite la navegacion programatica entre rutas, y RouterModule 
//modulo de enrutamiento necesario para menejar rutas dentro del componente Standalone
import { Router, RouterModule } from '@angular/router';
import { TableUser } from "./components/table-user/table-user";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, TableUser],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Testing Module Route';

  //Constructor que inyecta el servicio Router para usarlo en la navegacion
  constructor(private router: Router){}

  //Metodo publico que recibe string y navega a la ruta correspondiente
  irAPagina(pagina: string){
    this.router.navigate([pagina]);
  }
}
