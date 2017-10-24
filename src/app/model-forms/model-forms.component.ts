import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

function ageValidator(min=1, max=150):ValidatorFn{
  return function(control:AbstractControl):ValidationErrors{
    const isOk = control.value >0 && control.value <= 150;
    if(isOk) {
      return null;
    } 
      return {age:true};
  }
}

@Component({
  selector: 'app-model-forms',
  templateUrl: './model-forms.component.html',
  styleUrls: ['./model-forms.component.css']
})
export class ModelFormsComponent implements OnInit {
formulaire;
  constructor(private fb:FormBuilder) {
     }

  ngOnInit() {
    this.formulaire = this.fb.group({
      nom:['', [Validators.required, Validators.minLength(2)]],
      prenom:['', [Validators.required, Validators.minLength(2)]],
      age :['', [Validators.required, ageValidator()]]
    })
    //Validators.pattern(/[0-9]+/)
  }
submit() {
  if(this.formulaire.valid) {
  console.log(this.formulaire.value);
  }
}
}
