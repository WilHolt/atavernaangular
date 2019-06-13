import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrimoireComponent } from './grimoire.component';

describe('GrimoireComponent', () => {
  let component: GrimoireComponent;
  let fixture: ComponentFixture<GrimoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrimoireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrimoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
