import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {Router, RouterLink} from "@angular/router";

import {AuthService} from "../../core/services/auth/auth.service";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router)
  // private googleAuth = inject(GoogleAuthProvider);
  // private angularFireAuth = inject(AngularFireAuth);


  ngOnInit() {
    this.initFormLogin();
  }

  initFormLogin() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  loginWithEmail() {
    this.authService.loginWithEmail(this.loginForm.value.email, this.loginForm.value.password)
    //TODO AÑADIR CAPTURA DE ERROR
    this.router.navigateByUrl('/movies')
  }

  async logInWithGoogle() {
    try {
      this.authService.signInWithGoogle();
    } catch (error) {
      console.error('Error logging in with Google:', error);
      // Handle error appropriately (e.g., display a message to the user)
    }
  }}
