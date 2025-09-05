import { ChangeDetectionStrategy, Component, inject, NgZone, OnInit, signal } from '@angular/core';

import { InfoMessageComponent } from '../info-message/info-message.component';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  imports: [InfoMessageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
  count = signal(0);

  private zone = inject(NgZone);

  ngOnInit() {
    setTimeout(() => {
      this.count.set(0);
    }, 4000);


    // Opt out / avoiding zone pollution, change detection will not be triggered
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        console.log('Timer expird@!');
      }, 5000);
    }
    );


  }

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  onDecrement() {
    this.count.update((prevCount) => prevCount - 1);
  }

  onIncrement() {
    this.count.update((prevCount) => prevCount + 1);
  }
}
