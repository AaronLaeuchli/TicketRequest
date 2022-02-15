import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketExistsComponent } from './ticket-exists.component';

describe('TicketExistsComponent', () => {
  let component: TicketExistsComponent;
  let fixture: ComponentFixture<TicketExistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketExistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketExistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
