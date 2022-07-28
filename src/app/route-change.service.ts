import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteChangeService {
public test:boolean=true
  constructor(private router: Router) {

    router.events.subscribe((event:any) => {
  
      if(event.NavigationEnd ){
        console.log(event , 'tets');
      }
    });
  }
}
