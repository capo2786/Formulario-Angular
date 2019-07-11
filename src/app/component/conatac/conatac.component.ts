import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../../services/data-db.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'conatactForm',
  templateUrl: './conatac.component.html',
  styleUrls: ['./conatac.component.css']
})
export class ConatacComponent implements OnInit {
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passwordPattern : any = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
 // nombrePattern: any = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/;
  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.passwordPattern)]),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)])
    });
  }

  contactForm: FormGroup;

  constructor(private dbData: DataDbService) {
    this.contactForm = this.createFormGroup();
  }


  ngOnInit() {
  }

  onResetForm() {
    this.contactForm.reset();
  }

  onSaveForm() {
    if (this.contactForm.valid) {
      this.dbData.saveMessage(this.contactForm.value);
      this.onResetForm();
      console.log('Formulario Valido');
    } else {
      console.log('Formulario no valido');
    }
  }

  get name() { return this.contactForm.get('name'); }
  get password() { return this.contactForm.get('password'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

}