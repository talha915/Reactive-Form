import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  form: FormGroup;

  //firstName = new FormControl("", Validators.required);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "firstName": ["", Validators.required],
      "lastName": ["", Validators.required],
      "password": ["", Validators.required],
      "description": ["", Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(5)])]
    });
  }

  onSubmit() {
    console.log("model-based form submitted");
    console.log(this.form);
    console.log("Value: ", this.form.value);
  }
}
