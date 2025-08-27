
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: false
})

export class Header {
  protected readonly title = 'Easy Task';
}
