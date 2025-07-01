import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Cuidador } from '../model/cuidador';
import { CuidadorService } from '../service/cuidador.service';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-form-cuidador',
  standalone: true,
  templateUrl: './form-cuidador.component.html',
  styleUrl: './form-cuidador.component.css',
  providers: [CuidadorService, provideNgxMask()],
  imports: [HttpClientModule, CommonModule, FormsModule, NgxMaskDirective, NgxMaskPipe]
})
export class FormCuidadorComponent {
  cuidador: Cuidador = new Cuidador();

  @ViewChild('formCuidador') formCuidador!: NgForm;

  constructor(
    private cuidadorService: CuidadorService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {
    const id = this.activeRouter.snapshot.paramMap.get('id');

    if (id) {
      this.cuidadorService.getCuidadorById(id).subscribe(c => {
        this.cuidador = c;
      });
    }
  }

  salvar() {
    if (this.formCuidador.valid) {
      this.cuidadorService.saveCuidador(this.cuidador).subscribe(() => {
        this.router.navigate(['/cuidadores']);
      });
    } else {
      this.formCuidador.form.markAllAsTouched();
    }
  }
}
