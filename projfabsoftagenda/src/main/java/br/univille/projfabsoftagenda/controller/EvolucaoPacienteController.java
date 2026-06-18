package br.univille.projfabsoftagenda.controller;

import br.univille.projfabsoftagenda.entity.EvolucaoPaciente;
import br.univille.projfabsoftagenda.repository.EvolucaoPacienteRepository;
import br.univille.projfabsoftagenda.repository.PacienteRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/v1/evolucao")
@CrossOrigin(origins = "*")
public class EvolucaoPacienteController {

    private final EvolucaoPacienteRepository repository;
    private final PacienteRepository pacienteRepository;

    public EvolucaoPacienteController(EvolucaoPacienteRepository repository, PacienteRepository pacienteRepository) {
        this.repository = repository;
        this.pacienteRepository = pacienteRepository;
    }

    @GetMapping("/paciente/{pacienteId}")
    public List<EvolucaoPaciente> listarPorPaciente(@PathVariable Long pacienteId) {
        return repository.findByPacienteIdOrderByIdDesc(pacienteId);
    }

    @PostMapping("/paciente/{pacienteId}")
    public ResponseEntity<EvolucaoPaciente> criar(@PathVariable Long pacienteId,
                                                   @RequestBody EvolucaoPaciente evolucao) {
        return pacienteRepository.findById(pacienteId).map(paciente -> {
            evolucao.setPaciente(paciente);
            evolucao.setDataHora(LocalDateTime.now()
                .format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm")));
            return ResponseEntity.ok(repository.save(evolucao));
        }).orElse(ResponseEntity.notFound().build());
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
