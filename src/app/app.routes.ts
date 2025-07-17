import { Routes } from '@angular/router';
import { Page01 } from './components/page01/page01';
import { Page02 } from './components/page02/page02';
import { Page03 } from './components/page03/page03';
import { TableUser } from './components/table-user/table-user';
import { DetalleUser } from './components/detalle-user/detalle-user';
//importa los componentes que seran utilizados en las rutas
export const routes: Routes = [
    { path: '', component:Page01},
    { path: 'page01', component: Page01},
    { path: 'page02', component: Page02},
    { path: 'page03', component: Page03},
    { path: 'tableuser', component:TableUser},
    { path: 'detalleUsuario/:correo', component:DetalleUser}
];
 