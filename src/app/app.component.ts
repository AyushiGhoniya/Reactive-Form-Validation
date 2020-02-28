import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Reactive-Form-Validation';

  validationForm: FormGroup

  selected: string = 'name';

  constructor(
    private fb: FormBuilder
  ) { }

  fields = ['name', 'email', 'userName', 'selected']

  ngOnInit(){
    this.buildForm(this.selected)
  }

  buildForm(property: string) {
    this.validationForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      userName: ["", Validators.required],
      mobile: ["", Validators.required],
      selected: [property, Validators.required]
    })
    this.selected = property
  }

  OnSubmit() {
    this.fields.map(item => {
      if(this.validationForm.get('selected').value !== item) {
        this.validationForm.removeControl(item)
      }
    })
    console.log(this.validationForm.value)
  }
}
