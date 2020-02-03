import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ILink, guestLinks } from 'src/app/commons/menu-links';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  links: ILink[] = guestLinks;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.setLinks();
  }

  ngOnDestroy() { }

  private setLinks() {
    //   switch (this.userRole) {
    //     case COMPANY:
    //       this.links = companyLinks;
    //       return;
    //     case TRAVELER:
    //       this.links = travelerLinks;
    //       return;
    //     default:
    //       this.links = guestLinks;
    //   }
    // }
    this.links = guestLinks
  }
}