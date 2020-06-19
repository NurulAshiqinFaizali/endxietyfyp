import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Feed2Page } from './feed2.page';

describe('Feed2Page', () => {
  let component: Feed2Page;
  let fixture: ComponentFixture<Feed2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feed2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Feed2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
