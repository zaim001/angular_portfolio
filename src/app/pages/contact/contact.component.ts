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

  constructor(private fb: FormBuilder) {
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
      const form = document.forms.namedItem("contact") as HTMLFormElement;
      const formData = new FormData(form);

      // Manually trigger form submission to Netlify
      fetch("/", {
        method: "POST",
        body: formData,
      })
      .then(() => alert("Form successfully submitted"))
      .catch(error => alert("Form submission error: " + error));
    }
  }

}
