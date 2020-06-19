import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EndxietyPage } from './endxiety.page';

describe('EndxietyPage', () => {
  let component: EndxietyPage;
  let fixture: ComponentFixture<EndxietyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndxietyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EndxietyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
