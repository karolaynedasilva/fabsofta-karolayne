import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { AjudaService } from '../service/ajuda.service';

@Component({
  selector: 'app-homecuidador',
  standalone: true,
  imports: [HeaderComponent, RouterLink, CommonModule],
  templateUrl: './homecuidador.component.html',
  styleUrl: './homecuidador.component.css'
})
export class HomecuidadorComponent implements OnInit, OnDestroy {
  chamadosPendentes: any[] = [];
  private intervalo: any;

  constructor(private ajudaService: AjudaService, private router: Router) {}

  ngOnInit() {
    this.verificarChamados();
    this.intervalo = setInterval(() => this.verificarChamados(), 15000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }

  verificarChamados() {
    this.ajudaService.listarPendentes().subscribe({
      next: (lista) => this.chamadosPendentes = lista,
      error: () => {}
    });
  }

  atender(id: number) {
    this.ajudaService.atender(id).subscribe(() => {
      this.chamadosPendentes = this.chamadosPendentes.filter(c => c.id !== id);
    });
  }

  navegarParaEmergencias() {
    this.router.navigate(['/emergencias']);
  }
}