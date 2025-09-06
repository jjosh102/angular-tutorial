import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent]
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal<string>('');
  private placeseService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.isFetching.set(true);
    const get = this.placeseService.loadAvailablePlaces()
      .subscribe({
        next: (places) => {
          this.places.set(places);
        },
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
    const put = this.placeseService.addPlaceToUserPlaces(place).subscribe({
      next: (respose) => console.log(respose)
    });

    this.destroyRef.onDestroy(() => {
      put.unsubscribe();
    });
  }


}
