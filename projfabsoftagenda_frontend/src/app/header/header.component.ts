import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styles: [`
    .active-nav { color: #6366f1 !important; background: #f5f3ff !important; font-weight: 600 !important; }
    .nav-link:not(.active-nav) { color: #64748b !important; }
    .nav-link:not(.active-nav):hover { color: #334155 !important; background: #f8fafc !important; }
  `]
})
export class HeaderComponent {
  nomeUsuario: string = '';

  constructor(private router: Router) {
    this.nomeUsuario = this.lerNomeCuidador();
  }

  private lerNomeCuidador(): string {
    const raw = localStorage.getItem('usuario_cuidador');
    if (!raw) return '';
    const valor = raw.replace(/^"|"$/g, '');
    if (!valor.startsWith('Cuidador:')) return '';
    return valor.substring('Cuidador:'.length).trim();
  }

  logout() {
    localStorage.removeItem('usuario_cuidador');
    this.router.navigate(['/login']);
  }
}
