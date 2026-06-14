package br.univille.projfabsoftagenda.controller;

import br.univille.projfabsoftagenda.entity.Emergencia;
import br.univille.projfabsoftagenda.entity.Paciente;
import br.univille.projfabsoftagenda.entity.StatusEmergencia;
import br.univille.projfabsoftagenda.repository.EmergenciaRepository;
import br.univille.projfabsoftagenda.repository.PacienteRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/emergencias")
public class EmergenciaController {

    private final EmergenciaRepository repository;
    private final PacienteRepository pacienteRepository;

    public EmergenciaController(EmergenciaRepository repository, PacienteRepository pacienteRepository) {
        this.repository = repository;
        this.pacienteRepository = pacienteRepository;
    }

    @GetMapping
    public List<Emergencia> listarTodas() {
        return repository.findAll();
    }

    @GetMapping("/paciente/{pacienteId}")
    public List<Emergencia> listarPorPaciente(@PathVariable Long pacienteId) {
        return repository.findByPacienteId(pacienteId);
    }

    @PostMapping("/paciente/{pacienteId}")
    public ResponseEntity<Emergencia> criar(@PathVariable Long pacienteId) {
        Paciente paciente = pacienteRepository.findById(pacienteId).orElse(null);
        if (paciente == null) {
            return ResponseEntity.notFound().build();
        }

        Emergencia emergencia = new Emergencia();
        emergencia.setPaciente(paciente);
        emergencia.setStatus(StatusEmergencia.PENDENTE);

        Emergencia salva = repository.save(emergencia);
        return ResponseEntity.ok(salva);
    }

    @PutMapping("/{id}/atender")
    public ResponseEntity<Emergencia> atender(@PathVariable Long id) {
        return repository.findById(id)
                .map(emergencia -> {
                    emergencia.setStatus(StatusEmergencia.ATENDIDA);
                    return ResponseEntity.ok(repository.save(emergencia));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}