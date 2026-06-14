import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-form-paciente',
  imports: [HttpClientModule, CommonModule, FormsModule, NgxMaskDirective, NgxMaskPipe, RouterLink],
  templateUrl: './form-paciente.component.html',
  styleUrl: './form-paciente.component.css',
  providers: [provideNgxMask()]
})
export class FormPacienteComponent implements OnInit {
  paciente: Paciente = new Paciente();
  salvando = false;

  @ViewChild('formPaciente') formPaciente!: NgForm;

  constructor(
    private pacienteService: PacienteService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.paramMap.get('id');
    if (id) {
      this.pacienteService.getPacienteById(id).subscribe(p => {
        this.paciente = p;
      });
    }
  }

  salvar() {
    if (this.salvando) return;
    if (!this.formPaciente?.valid) {
      this.formPaciente?.form.markAllAsTouched();
      return;
    }

    this.salvando = true;
    this.pacienteService.savePaciente(this.paciente).subscribe({
      next: () => {
        // NgZone.run garante que o navigate ocorre dentro do ciclo correto do Angular
        this.ngZone.run(() => {
          this.router.navigate(['/pacientes']);
        });
      },
      error: (err) => {
        this.salvando = false;
        console.error('Erro ao salvar:', err);
      }
    });
  }
}