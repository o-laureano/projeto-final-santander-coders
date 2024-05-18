import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Aqui você pode adicionar a lógica de autenticação, como fazer uma chamada HTTP para autenticar o usuário.
    // Por enquanto, vamos apenas redirecionar para a página de dashboard.
    this.router.navigate(['/dashboard']);
  }
}
