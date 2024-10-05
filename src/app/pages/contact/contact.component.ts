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

  constructor(private fb: FormBuilder, private http : HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  
  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = new URLSearchParams();
      for (const key in this.contactForm.value) {
        formData.append(key, this.contactForm.value[key]);
      }
      formData.append('form-name', 'contact'); 

      this.http.post('/', formData.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'text/html'
        },
        responseType: 'text'
      }).subscribe({
        next: () => {
          alert('Form successfully submitted');
          this.contactForm.reset();
        },
        error: (error) => {
          console.error('Form submission error:', error);
          alert('Form submission error. Please try again.');
        }
      });
    }
  }
}
