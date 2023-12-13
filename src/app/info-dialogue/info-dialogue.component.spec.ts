import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDialogueComponent } from './info-dialogue.component';

describe('InfoDialogueComponent', () => {
  let component: InfoDialogueComponent;
  let fixture: ComponentFixture<InfoDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoDialogueComponent]
    });
    fixture = TestBed.createComponent(InfoDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
