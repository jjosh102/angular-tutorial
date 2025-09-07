import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { HttpClient } from '@angular/common/http';
import { Place } from '../place.model';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent]
})
export class UserPlacesComponent implements OnInit {


  isFetching = signal(false);
  error = signal<string>('');
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);
  places = this.placesService.loadedUserPlaces;

  ngOnInit() {
    this.isFetching.set(true);
    const get = this.placesService.loadUserPlaces()
      .subscribe({
        complete: () => {
          this.isFetching.set(false);
        },
        error: (error: Error) => {
          this.error.set(error.message);
        }
      },);

    this.destroyRef.onDestroy(() => {
      get.unsubscribe();
    });
  }

  onSelectPlace(place: Place) {
    const del = this.placesService.removeUserPlace(place).subscribe({
      next: (respose) => console.log(respose)
    });

    this.destroyRef.onDestroy(() => {
      del.unsubscribe();
    });
  }

}
