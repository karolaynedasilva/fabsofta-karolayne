// import { Component } from '@angular/core';
// import { HomecuidadorService } from '../service/homecuidador.service';
// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { Router, RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-homecuidador',
//   imports: [HttpClientModule, CommonModule, RouterLink],
//   templateUrl: './homecuidador.component.html',
//   styleUrl: './homecuidador.component.css',
//   providers: [HomecuidadorService]
// })
// export class HomecuidadorComponent {
//     constructor(private router: Router) {
//       this.router.routeReuseStrategy.shouldReuseRoute = () => false;
//     }

//     navegarPara(rota: string) {
//       this.router.navigate([rota]);
//     }

//     navegarParaLembretes(rota: string) {
//       this.router.navigate(['/lembretes/novo']);
//     }

// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-homecuidador',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink],
  templateUrl: './homecuidador.component.html',
  styleUrl: './homecuidador.component.css'
})
export class HomecuidadorComponent {
  constructor(
  private router: Router,
  private activeRouter: ActivatedRoute
  ) {}
  

  navegarParaPacientes() {
    this.router.navigate(['/pacientes/novo']);
  }

  navegarParaLembretes() {
    this.router.navigate(['/lembretes/novo']);
  }

  navegarParaAtividades() {
    this.router.navigate(['/atividades/novo']);
  }

  navegarParaHistorico() {
    this.router.navigate(['/historico']);
  }
}
