import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = ''; // Defina a propriedade email aqui
  password: string = ''; // Adicione a propriedade password aqui
  confirmPassword: string = '';
  // Aqui você pode adicionar as propriedades do formulário, como nome, email, senha, etc.
  // Certifique-se de vincular essas propriedades aos campos de entrada no template HTML.

  constructor() {}

  register() {
    // Aqui você pode adicionar a lógica de registro, como fazer uma chamada HTTP para registrar o usuário.
    // Por enquanto, vamos apenas exibir uma mensagem de registro bem-sucedido.
    console.log('Registro bem-sucedido!');
  }
}
