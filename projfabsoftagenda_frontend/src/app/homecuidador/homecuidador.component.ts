import { Component } from '@angular/core';
import { HomecuidadorService } from '../service/homecuidador.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-homecuidador',
  imports: [HttpClientModule, CommonModule, RouterLink],
  templateUrl: './homecuidador.component.html',
  styleUrl: './homecuidador.component.css',
  providers: [HomecuidadorService]
})
export class HomecuidadorComponent {
    constructor(private router: Router) {}

    navegarPara(rota: string) {
      this.router.navigate([rota]);
    }
}
