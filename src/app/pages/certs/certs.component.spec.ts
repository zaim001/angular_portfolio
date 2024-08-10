import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertsComponent } from './certs.component';

describe('CertsComponent', () => {
  let component: CertsComponent;
  let fixture: ComponentFixture<CertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
