import { ChangeDetectorRef, Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { MessagesService } from '../messages.services';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  imports: [AsyncPipe],
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
})
export class MessagesListComponent {
  private messagesService = inject(MessagesService);
  // private cdRef = inject(ChangeDetectorRef);
  // private destorRef = inject(DestroyRef);
  messages = this.messagesService.allMessages;
  // ngOnInit() {
  //   // const subscription = this.messagesService.messages$.subscribe((messages) => {
  //   //   this.messages = messages;
  //   //   this.cdRef.markForCheck();
  //   // });

  //   // this.destorRef.onDestroy(() => {
  //   //   subscription.unsubscribe();
  //   // });
  // }

  // shortcut using pipes:
  // messages$ = this.messagesService.messages$;

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }

}
