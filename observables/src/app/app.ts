import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { interval, map, Observable } from 'rxjs'
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, {
    initialValue: 0
  });

  customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;
    const interval = setInterval(() => {
      if (timesExecuted > 3) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log("Emitting ...")
      subscriber.next({
        message: 'New value'
      });
      timesExecuted++;
    }, 2000);
  });
  private destroyref = inject(DestroyRef);

  constructor() {
    // effect(() => {
    //   console.log(`Clicked ${this.clickCount()}`);
    // }
    // );
    // toObservable
    toObservable(this.clickCount);

  }

  ngOnInit(): void {
    const subscription = this.interval$
      .pipe(map((val) => val * 2))
      .subscribe({
        next: (val) => console.log(val)
      });


    const customIntervalSubscription = this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete : () => console.log('Completed')
    });

    var clickSubscription = this.clickCount$.subscribe({
      next: (val) => console.log(`Clicked ${this.clickCount()}`)
    });

    this.destroyref.onDestroy(() => {
      subscription.unsubscribe();
      clickSubscription.unsubscribe();
      customIntervalSubscription.unsubscribe();
    });
  }

  onClick() {
    this.clickCount.update((prevValue) => prevValue + 1);
  }
}
