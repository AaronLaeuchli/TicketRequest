import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTicketDetailComponent } from './dialog-ticket-detail.component';

describe('DialogTicketDetailComponent', () => {
  let component: DialogTicketDetailComponent;
  let fixture: ComponentFixture<DialogTicketDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTicketDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTicketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
