import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BreathePage } from './breathe.page';

describe('BreathePage', () => {
  let component: BreathePage;
  let fixture: ComponentFixture<BreathePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreathePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BreathePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
