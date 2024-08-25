import { Component, Input } from '@angular/core';
import { Certificate } from '../../models/certificate';
import { CERTIFICATES } from '../../shared/data/certs.mock';

@Component({
  selector: 'app-certs',
  standalone: true,
  imports: [],
  templateUrl: './certs.component.html',
  styleUrl: './certs.component.scss'
})
export class CertsComponent {
  @Input() certs : Certificate[] = CERTIFICATES;
}
