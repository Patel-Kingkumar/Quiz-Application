import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InfoDialogueComponent } from 'src/app/info-dialogue/info-dialogue.component';

@Injectable({
  providedIn: 'root'
})
export class AuthDialogueService {

  constructor(private modalService: NgbModal) { }
  public confirm(
    title: string,
    message: string,
    btnOkText: string = 'OK',
    dialogSize: 'sm'|'md'|'lg'|'xl'|'xll' = 'lg'): Promise<boolean> {
    const modalRef = this.modalService.open(InfoDialogueComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    return modalRef.result;
  }
}
