import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentListComponent } from './investiment-list.component';

describe('InvestimentListComponent', () => {
  let component: InvestimentListComponent;
  let fixture: ComponentFixture<InvestimentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestimentListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestimentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
