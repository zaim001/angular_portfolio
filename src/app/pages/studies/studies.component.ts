import { Component, Input } from '@angular/core';
import { Education } from '../../models/education';
import { STUDIES } from '../../shared/data/studies.mock';

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.scss'
})
export class StudiesComponent {
@Input() studies : Education[] = STUDIES;
}
