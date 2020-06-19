import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Feed3Page } from './feed3.page';

describe('Feed3Page', () => {
  let component: Feed3Page;
  let fixture: ComponentFixture<Feed3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feed3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Feed3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
