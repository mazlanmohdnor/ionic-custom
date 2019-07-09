import { TestBed } from '@angular/core/testing';

import { IonLanService } from './ion-lan.service';

describe('IonLanService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    
    it('should be created', () => {
        const service: IonLanService = TestBed.get(IonLanService);
        expect(service).toBeTruthy();
    });
});
