import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalesEliminarComponent } from './hospitales-eliminar.component';

describe('HospitalesEliminarComponent', () => {
  let component: HospitalesEliminarComponent;
  let fixture: ComponentFixture<HospitalesEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalesEliminarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HospitalesEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
