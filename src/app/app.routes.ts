import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { HospitalesNuevoComponent } from './hospitales-nuevo/hospitales-nuevo.component';
import { HospitalesModificarComponent } from './hospitales-modificar/hospitales-modificar.component';
import { HospitalesEliminarComponent } from './hospitales-eliminar/hospitales-eliminar.component';

export const routes: Routes = [
    {
        path: 'test',
        component: TestComponent
    },
    {
        path: '',
        children: [
            { path: 'hospitales', component: HospitalesComponent},
        ]
    },
    {
        path: '',
        children: [
            { path: 'hospitales-nuevo', component: HospitalesNuevoComponent},
        ]
        
    },
    {
        path: '',
        children: [
            { path: 'hospitales-Modificar', component: HospitalesModificarComponent},
        ]
        
    },
    {
        path: '',
        children: [
            { path: 'hospitales-Eliminar', component: HospitalesEliminarComponent},
        ]
        
    },
];