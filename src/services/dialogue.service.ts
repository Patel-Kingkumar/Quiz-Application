import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogueComponent } from 'src/app/dialogue/dialogue.component';

@Injectable({
  providedIn: 'root'
})
export class DialogueService {

  constructor(private modalService: NgbModal) { }
  public confirm(
    title: string,
    message: string,
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel',
    dialogSize: 'sm'|'md'|'lg'|'xl'|'xll' = 'lg'): Promise<boolean> {
    const modalRef = this.modalService.open(DialogueComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;
    return modalRef.result;
  }
}
