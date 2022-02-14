import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTicketAddComponent } from './dialog-ticket-add.component';

describe('DialogTicketAddComponent', () => {
  let component: DialogTicketAddComponent;
  let fixture: ComponentFixture<DialogTicketAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTicketAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTicketAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
