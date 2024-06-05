import { Component, Input } from '@angular/core';

import { PROJECTS } from '../../shared/data/project.mock';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() projects: Project[]= PROJECTS;
}
