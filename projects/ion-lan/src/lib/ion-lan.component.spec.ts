import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonLanComponent } from './ion-lan.component';

describe('IonLanComponent', () => {
    let component: IonLanComponent;
    let fixture: ComponentFixture<IonLanComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
                   declarations: [IonLanComponent],
                   schemas: [CUSTOM_ELEMENTS_SCHEMA]
               })
               .compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(IonLanComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
