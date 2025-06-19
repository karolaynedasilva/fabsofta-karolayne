import { Component } from '@angular/core';
import { Lembrete } from '../model/lembrete';
import { LembreteService } from '../service/lembrete.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-lembrete',
  imports: [HttpClientModule, CommonModule, RouterLink],
  templateUrl: './lembrete.component.html',
  styleUrl: './lembrete.component.css',
  providers: [LembreteService,  provideNgxMask()]
})
export class LembreteComponent {

  public listaLembretes: Lembrete[] = [];

  constructor(
    private lembreteService: LembreteService
  ){}

  ngOnInit(): void {
    this.lembreteService.listar().subscribe(resposta => {
      this.listaLembretes = resposta;
    });
  }
}
