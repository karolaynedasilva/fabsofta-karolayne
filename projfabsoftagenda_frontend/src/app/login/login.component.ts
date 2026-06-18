import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [LoginService]
})
export class LoginComponent {
  usuario = { email: '', senha: '' };

  constructor(private loginService: LoginService, private router: Router) {}

  autenticar() {
    this.loginService.login(this.usuario.email, this.usuario.senha).subscribe({
      next: (res: any) => {
        localStorage.setItem('usuario_cuidador', res);

        if (res.includes('Administrador')) {
          this.router.navigate(['/cuidadores']);
        } else if (res.includes('Cuidador')) {
          this.router.navigate(['/homecuidador']);
        } else if (res.includes('Paciente')) {
          const partes = res.split(':');
          const pacienteId = partes[1];
          this.router.navigate(['/paciente-home', pacienteId]);
        }
      },
      error: () => alert('Email ou senha inválidos!')
    });
  }
}
