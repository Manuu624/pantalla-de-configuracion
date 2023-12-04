import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionUsuarioComponent } from './configuracion-usuario.component';

describe('ConfiguracionUsuarioComponent', () => {
  let component: ConfiguracionUsuarioComponent;
  let fixture: ComponentFixture<ConfiguracionUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracionUsuarioComponent]
    });
    fixture = TestBed.createComponent(ConfiguracionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
