import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);
  private httpClient = inject(HttpClient);
  private errorService = inject(ErrorService);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces('http://localhost:3000/places');
  }

  loadUserPlaces() {
    return this.fetchPlaces('http://localhost:3000/user-places')
      .pipe(tap({
        next: (userPlaces) => this.userPlaces.set(userPlaces ?? [])
      }));
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces();
    if (!prevPlaces.some((p) => p.id === place.id)) {
      this, this.userPlaces.set([...prevPlaces, place]);
    }

    return this.httpClient.put('http://localhost:3000/user-places', {
      placeId: place.id
    }).pipe(
      catchError((error) => {
        this.userPlaces.set(prevPlaces);
        this.errorService.showError('Something went wrong adding places');
        return throwError(() => new Error('Something went wrong adding places'));
      })
    );
  }

  removeUserPlace(place: Place) {
    const prevPlaces = this.userPlaces();
    if (prevPlaces.some((p) => p.id === place.id)) {
      this, this.userPlaces.set(prevPlaces.filter(p => p.id !== place.id));
    }
    return this.httpClient
      .delete(`http://localhost:3000/user-places/${place.id}`)
      .pipe(
        catchError((error) => {
          this.userPlaces.set(prevPlaces);
          this.errorService.showError('Something went wrong adding places');
          return throwError(() => new Error('Something went wrong adding places'));
        })
      );;
  }

  private fetchPlaces(url: string) {
    return this.httpClient.get<{ places: Place[] }>(url, {
      observe: 'response'
    }
    ).pipe(
      map((responseData) => responseData.body?.places),
      catchError((error) => throwError(() => new Error('Something went wrong!')))
    )
  }
}
