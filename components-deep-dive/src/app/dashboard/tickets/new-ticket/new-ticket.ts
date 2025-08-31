import { AfterViewInit, Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { Control } from "../../../shared/control/control";

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css'
})
export class NewTicket implements AfterViewInit {

  // If you are using decorators, getting hold of the element ref  should take place on onAfterViewInit
  // While using function mehtod ,  it is accessible within onInit
  //@ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngAfterViewInit() {

  }

  onSubmit(title: string, description: string) {
    this.form().nativeElement.reset();
  }
}
