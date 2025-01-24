import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet, RouterState } from '@angular/router';
import { AngularMaterialComponents } from './shared/angular-material';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AngularMaterialComponents, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  links = [
    {
      name: 'Sobre mim',
      route: '/'
    },
    {
      name: 'Projetos',
      route: '/projects'
    }
  ]
  activeLink = '';
  title = 'portfolio';

  constructor(
    private router: Router,
  ) {
    this.router.events.subscribe((event ) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url)
        this.activeLink = event.url
      }
    })
  }


  isLinkActive(route: string) {
    return this.activeLink === route;
  }
}
