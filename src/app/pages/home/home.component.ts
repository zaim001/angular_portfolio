import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { StudiesComponent } from '../studies/studies.component';
import { HeroComponent } from '../hero/hero.component';
import { ContactComponent } from '../contact/contact.component';
import { EXPERIENCES } from '../../shared/data/experience.mock';
import { Experience } from '../../models/experience';
import { CertsComponent } from "../certs/certs.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, StudiesComponent, ExperiencesComponent, SkillsComponent, ProjectsComponent, ContactComponent, CertsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
