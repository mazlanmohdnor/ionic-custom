import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DeviceFeedback } from '@ionic-native/device-feedback/ngx';
import { IonicModule } from '@ionic/angular';
import { MCardComponent } from 'app/components/m-card/m-card.component';
import { MHeaderComponent } from 'app/components/m-header/m-header.component';
import { MSlideComponent } from 'app/components/m-slide/m-slide.component';
import { MSubheaderComponent } from 'app/components/m-subheader/m-subheader.component';

@NgModule({
    declarations: [
        MCardComponent, MHeaderComponent, MSlideComponent, MSubheaderComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        MCardComponent, MHeaderComponent, MSlideComponent, MSubheaderComponent
    ],
    providers: [
        DeviceFeedback
    ]
})
export class ComponentsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ComponentsModule,
            providers: [
                DeviceFeedback
            ]
        };
    }
}
