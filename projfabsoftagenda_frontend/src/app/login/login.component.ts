import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Aqui garantimos que FormsModule está incluído
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [LoginService]
})
export class LoginComponent {
  usuario = { email: '', senha: '', tipo: '' };
  modoLogin = true;

  constructor(private loginService: LoginService, private router: Router) {}

  alternarModo() {
    this.modoLogin = !this.modoLogin;
  }

  autenticarOuCadastrar() {
    if (this.modoLogin) {
      this.loginService.login(this.usuario.email, this.usuario.senha).subscribe({
        next: (res) => {
          localStorage.setItem('usuario', JSON.stringify(res));
          if (res.tipo === 'CUIDADOR') {
            this.router.navigate(['/homecuidador']);
          } else {
            this.router.navigate(['/lembrete']);
          }
        },
        error: () => alert('Login inválido!')
      });
    } else {
      this.loginService.cadastrar(this.usuario).subscribe({
        next: () => {
          alert('Usuário cadastrado com sucesso!');
          this.alternarModo();
        },
        error: () => alert('Erro ao cadastrar!')
      });
    }
  }
}
