import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DeviceFeedback } from '@ionic-native/device-feedback/ngx';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'app/components/components.module';
import { MCardComponent } from 'app/components/m-card/m-card.component';
import { MHeaderComponent } from 'app/components/m-header/m-header.component';
import { MSlideComponent } from 'app/components/m-slide/m-slide.component';
import { MSubheaderComponent } from 'app/components/m-subheader/m-subheader.component';
import { HomePage } from './home.page';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        IonicModule,
        ComponentsModule.forRoot(),
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ])
    ],
    declarations: [HomePage],
    providers: []
})
export class HomePageModule {}
