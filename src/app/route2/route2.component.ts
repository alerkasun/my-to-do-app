import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrl: './route2.component.scss'
})
export class Route2Component {

  form = this.fb.group({
    field1: ['', Validators.required],
    fields2: this.fb.array([
      this.fb.control('').setValidators([Validators.required])
    ])
  })

  constructor(private fb: FormBuilder){

  }

  get fields2() {
    return this.form.get('fields2') as FormArray
  }

  addFields2() {
    this.fields2.push(this.fb.control('').setValidators([Validators.required]))
  }

  removeFields2(idx: number) {
    this.fields2.removeAt(idx)
  }


}
