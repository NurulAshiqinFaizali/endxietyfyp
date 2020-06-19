import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Feed1Page } from './feed1.page';

describe('Feed1Page', () => {
  let component: Feed1Page;
  let fixture: ComponentFixture<Feed1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feed1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Feed1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
