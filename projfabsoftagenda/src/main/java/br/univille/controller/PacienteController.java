package br.univille.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.univille.entity.Paciente;
import br.univille.service.PacienteService;

@RestController
@RequestMapping("/api/v1/pacientes")
public class PacienteController {

    @Autowired
    private PacienteService service;

    @GetMapping
    public ResponseEntity<List<Paciente>> getPacientes() {
        var listaPacientes = service.getAll();
        return new ResponseEntity<>(listaPacientes, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Paciente> postPaciente(@RequestBody Paciente paciente) {
        if (paciente == null) {
            return ResponseEntity.badRequest().build();
        }

        if (paciente.getId() == 0) {
            service.save(paciente);
            return new ResponseEntity<>(paciente, HttpStatus.OK);
        }

        return ResponseEntity.badRequest().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Paciente> putPaciente(@PathVariable long id, @RequestBody Paciente paciente) {
        if (id <= 0 || paciente == null) {
            return ResponseEntity.badRequest().build();
        }

        var pacienteAntigo = service.getById(id);
        if (pacienteAntigo == null) {
            return ResponseEntity.notFound().build();
        }

        pacienteAntigo.setNome(paciente.getNome());
        pacienteAntigo.setEndereco(paciente.getEndereco());
        pacienteAntigo.setTelefoneEmergencia(paciente.getTelefoneEmergencia());
        pacienteAntigo.setIdade(paciente.getIdade());
        pacienteAntigo.setEstadoEmocionalAtual(paciente.getEstadoEmocionalAtual());
        pacienteAntigo.setAtividades(paciente.getAtividades());
        pacienteAntigo.setHistorico(paciente.getHistorico());
        pacienteAntigo.setAlbum(paciente.getAlbum());

        service.save(pacienteAntigo);
        return new ResponseEntity<>(pacienteAntigo, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Paciente> deletePaciente(@PathVariable long id) {
        if (id <= 0) {
            return ResponseEntity.badRequest().build();
        }

        var pacienteExcluido = service.getById(id);
        if (pacienteExcluido == null) {
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<>(pacienteExcluido, HttpStatus.OK);
    }
}
