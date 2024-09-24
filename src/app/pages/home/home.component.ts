import { AfterContentInit, Component, OnInit } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { StudiesComponent } from '../studies/studies.component';
import { HeroComponent } from '../hero/hero.component';
import { ContactComponent } from '../contact/contact.component';
import { CertsComponent } from "../certs/certs.component";
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, StudiesComponent, ExperiencesComponent, SkillsComponent, ProjectsComponent, ContactComponent, CertsComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Listen to route changes and scroll to fragment
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.scrollToFragment();
      });
  }

  private scrollToFragment(): void {
    this.activatedRoute.queryParamMap.subscribe(params => {
      const fragment = params.get('fragment');
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
      }
    });
  }
}

