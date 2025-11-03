import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonBallPageComponent } from './dragonball-page.component';

describe('DragonBallPageComponent', () => {
  let component: DragonBallPageComponent;
  let fixture: ComponentFixture<DragonBallPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonBallPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonBallPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
