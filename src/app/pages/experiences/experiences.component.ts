import { Component, Input} from '@angular/core';
import { Experience } from '../../models/experience';
import { EXPERIENCES } from '../../shared/data/experience.mock';


@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
 @Input() experiences: Experience[]= EXPERIENCES;


 isOdd(num: number): boolean {
   return num % 2 !== 0;
 }
}



