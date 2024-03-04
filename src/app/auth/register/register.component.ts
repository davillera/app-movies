import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {RouterLink} from "@angular/router";

import {matchValuesValidator} from "../../core/services/match-values.validator";
import {AuthService} from "../../core/services/auth/auth.service";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'app-register',
  standalone: true,
  providers: [
    MessageService
  ],
  imports: [
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    RouterLink,
    ToastModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;

  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);
  private messageService = inject(MessageService)

  ngOnInit() {
    this.initFormLogin();
  }

  initFormLogin() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['']
    }, {
      validators: matchValuesValidator('password', 'confirmPassword')
    });
  }

  register() {
    if(this.registerForm.valid){
      this.authService.registerWithEmail(this.registerForm.value.email, this.registerForm.value.password)
      //TODO AÑADIR CAPTURA DE ERROR
      this.messageService.add({severity: 'success', summary: 'Created'});
      this.registerForm.reset()
    }else{
      this.messageService.add({severity: 'error', summary: 'Error'});
    }


  }

  registerWithGoogle() {

  }
}
