import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectSuccessComponent } from './redirect-success.component';

describe('RedirectSuccessComponent', () => {
  let component: RedirectSuccessComponent;
  let fixture: ComponentFixture<RedirectSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedirectSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
