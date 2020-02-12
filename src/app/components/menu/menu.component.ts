import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ILink, guestLinks, registeredLinks} from 'src/app/commons/menu-links';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  public links: ILink[] = registeredLinks;

  constructor(
    private router: Router,
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.setLinks();
  }

  ngOnDestroy() { }


  public setLinks() {
    this.authService.userRole$.subscribe(role=>this.authService.isAuthenticated() ? this.links = registeredLinks: this.links=guestLinks)
  }
}