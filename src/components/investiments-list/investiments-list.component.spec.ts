import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentsListComponent } from './investiments-list.component';

describe('InvestimentsListComponent', () => {
  let component: InvestimentsListComponent;
  let fixture: ComponentFixture<InvestimentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestimentsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestimentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
