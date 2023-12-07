// shared.service.ts
import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RouteService {
  private currentRouteSubject = new Subject<string>();
  currentRoute$ = this.currentRouteSubject.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.currentRouteSubject.next(event.url);
      });
  }

  // Get the current route URL
  getCurrentRoute(): Observable<string> {
    return this.currentRoute$;
  }
}
