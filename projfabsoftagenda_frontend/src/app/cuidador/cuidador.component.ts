import { Component } from '@angular/core';
import { Cuidador } from '../model/cuidador';
import { CuidadorService } from '../service/cuidador.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cuidador',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './cuidador.component.html',
  styleUrl: './cuidador.component.css',
  providers: [CuidadorService]
})
export class CuidadorComponent {

  public listaCuidadores: Cuidador[] = [];
  constructor(
    private cuidadorService: CuidadorService
  ){}

  ngOnInit(): void {
    this.cuidadorService.getCuidadores().subscribe(resposta =>{
      this.listaCuidadores = resposta;
    });
  }
}
