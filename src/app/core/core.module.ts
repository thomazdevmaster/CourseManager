import { NgModule } from '@angular/core';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Erro404Component } from './component/erro-404/erro-404.component';


@NgModule({
    declarations: [
        NavBarComponent,
        Erro404Component
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '***', component: Erro404Component
            }
        ])
    ],
    exports: [
        NavBarComponent
    ]
})


export class CoreModule{}