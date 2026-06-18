import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink],
  templateUrl: './login-paciente.component.html',
  providers: [LoginService]
})
export class LoginPacienteComponent {
  usuario = { email: '', senha: '' };
  erro = '';

  constructor(private loginService: LoginService, private router: Router) {}

  autenticar() {
    this.erro = '';
    this.loginService.login(this.usuario.email, this.usuario.senha).subscribe({
      next: (res: any) => {
        if (res.includes('Paciente')) {
          localStorage.setItem('usuario_paciente', res);
          const partes = res.split(':');
          const pacienteId = partes[1];
          this.router.navigate(['/paciente-home', pacienteId]);
        } else {
          this.erro = 'Acesso restrito a pacientes.';
        }
      },
      error: () => {
        this.erro = 'Email ou senha inválidos.';
      }
    });
  }
}
