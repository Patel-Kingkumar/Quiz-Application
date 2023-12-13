import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info-dialogue',
  templateUrl: './info-dialogue.component.html',
  styleUrls: ['./info-dialogue.component.scss']
})
export class InfoDialogueComponent {
  @Input() title: any;
  @Input() message: any;
  @Input() btnOkText: any;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }
}
