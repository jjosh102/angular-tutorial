import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent implements OnInit {
  userId = input.required<string>();
  message = input.required<string>();
  userName = input.required<string>();
  private usersService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  user = computed(() => this.usersService.users.find((user) => user.id === this.userId()));

  ngOnInit() {
    // use for quickly getting values during initial load and not require reactivity
    console.log(`Resolving route dynamic data - ${this.userName()}`);
    console.log(this.message());
    console.log(this.activatedRoute.snapshot.paramMap);
    console.log(this.activatedRoute);
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: paramMap => console.log(paramMap.get('userId'))
    });

    this.destroyRef.onDestroy(() =>
      subscription.unsubscribe()
    );
  }
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routeState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userName = usersService.users.find((user) => user.id === activatedRoute.paramMap.get('userId'))?.name || '';
  return userName;
}



export const resolveTitle: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routeState: RouterStateSnapshot
) => {

  return `${resolveUserName(activatedRoute,routeState)} 's Tasks`;

}
