import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverMessageComponent } from './recover-message.component';

describe('RecoverMessageComponent', () => {
  let component: RecoverMessageComponent;
  let fixture: ComponentFixture<RecoverMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
