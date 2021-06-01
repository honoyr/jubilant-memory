import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthpageComponent } from './authpage.component';

describe('AuthpageComponent', () => {
  let component: AuthpageComponent;
  let fixture: ComponentFixture<AuthpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
