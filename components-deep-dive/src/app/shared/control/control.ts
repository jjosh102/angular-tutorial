import { afterEveryRender, afterNextRender, Component, contentChild, ContentChild, ElementRef, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  host: { 'class': 'control' }
})
export class Control {

  label = input.required<string>();
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  constructor() {
    //Triggered when there are any changes in the app.
    afterEveryRender(() => {

    });

    afterNextRender({

    });


  }


}
function afterRender() {
  throw new Error('Function not implemented.');
}

