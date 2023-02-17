import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxEntityRelationshipComponent } from './ngrx-entity-relationship.component';

describe('NgrxEntityRelationshipComponent', () => {
  let component: NgrxEntityRelationshipComponent;
  let fixture: ComponentFixture<NgrxEntityRelationshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgrxEntityRelationshipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgrxEntityRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
