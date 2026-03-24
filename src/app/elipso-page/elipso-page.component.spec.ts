import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElipsoPageComponent } from './elipso-page.component';

describe('ElipsoPageComponent', () => {
  let component: ElipsoPageComponent;
  let fixture: ComponentFixture<ElipsoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElipsoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElipsoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
