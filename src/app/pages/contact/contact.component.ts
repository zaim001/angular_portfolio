import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {

  this.contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    company: ['', Validators.required],
    phone: ['', Validators.required],
    message: ['', Validators.required]
  });
}

onSubmit() {
  if (this.contactForm.valid) {
    const formData = new HttpParams()
      .set('form-name', 'MyContact')
      .set('name', this.contactForm.get('name')?.value)
      .set('email', this.contactForm.get('email')?.value)
      .set('company', this.contactForm.get('company')?.value)
      .set('phone', this.contactForm.get('phone')?.value)
      .set('message', this.contactForm.get('message')?.value);

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post('/', formData.toString(), { headers }).subscribe(
      response => {
        // Handle successful submission here
        console.log('Form successfully submitted', response);
        // Redirect or show a success message
      },
      error => {
        // Handle submission error here
        console.error('Form submission error', error);
      }
    );
  }
}

}
