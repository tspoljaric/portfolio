import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrisPageComponent } from './iris-page.component';

describe('IrisPageComponent', () => {
  let component: IrisPageComponent;
  let fixture: ComponentFixture<IrisPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IrisPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
