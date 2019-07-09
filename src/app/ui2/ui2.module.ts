import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'app/components/components.module';

import { Ui2Page } from './ui2.page';

const routes: Routes = [
    {
        path: '',
        component: Ui2Page
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ComponentsModule.forRoot()
    ],
    declarations: [Ui2Page]
})
export class Ui2PageModule {}
