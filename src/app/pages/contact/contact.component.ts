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
  isContactFormSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = new URLSearchParams();
      formData.set('form-name', 'contact');
      formData.set('name', this.contactForm.get('name')?.value);
      formData.set('email', this.contactForm.get('email')?.value);
      formData.set('company', this.contactForm.get('company')?.value);
      formData.set('phone', this.contactForm.get('phone')?.value);
      formData.set('message', this.contactForm.get('message')?.value);

      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "text/html"
        },
        body: formData.toString()
      })
      .then(response => {
        if (response.ok) {
          this.isContactFormSubmitted = true;
        } else {
          console.error('Form submission error:', response.statusText);
        }
      })
      .catch(error => console.error('Form submission error:', error));
    }
  }

}
