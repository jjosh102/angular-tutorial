import { AfterViewInit, Component, ElementRef, output, viewChild, ViewChild } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { Control } from "../../../shared/control/control";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css'
})
export class NewTicket implements AfterViewInit {

  // If you are using decorators, getting hold of the element ref  should take place on onAfterViewInit
  // While using function mehtod ,  it is accessible within onInit
  //@ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<{ title: string, description: string }>();
  ngAfterViewInit() {

  }

  onSubmit(titleText: string, descriptionText: string) {
    this.add.emit({ title: titleText, description: descriptionText })
    this.form().nativeElement.reset();
  }
}
