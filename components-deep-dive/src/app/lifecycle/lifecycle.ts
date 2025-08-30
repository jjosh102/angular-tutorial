import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, input, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
  standalone: true
})
export class Lifecycle implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  text = input.required<string | undefined>();

  constructor() {
    console.log('CONSTRUCTOR');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    // You can use ti get previous and current values of inputs
    //Executed when any data-bound property of a directive changes
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngDoCheck() {
    // You can use this hook for event/UI changes
    // Detects in any part of the app
    // Careful of using it since this changes frequently
    console.log('ngDoCheck');
  }

  // Content hooks (ngAfterContentInit, ngAfterContentChecked) are triggered by changes in projected content (ng-content).
  // View hooks (ngAfterViewInit, ngAfterViewChecked) are triggered by changes in the component's own template and child components.
  // In short: "Content" = external content projected into your component; "View" = your component's own template and children.
  ngAfterContentInit() {
    //  Projected content has been initialized
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    //Projected content has been checked by angular change detection
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    //  View has been initialized
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    //View has been checked by angular change detection
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
