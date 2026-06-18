package br.univille.projfabsoftagenda.controller;

import br.univille.projfabsoftagenda.entity.Paciente;
import br.univille.projfabsoftagenda.entity.SolicitacaoAjuda;
import br.univille.projfabsoftagenda.repository.PacienteRepository;
import br.univille.projfabsoftagenda.repository.SolicitacaoAjudaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/ajuda")
@CrossOrigin(origins = "*")
public class SolicitacaoAjudaController {

    private final SolicitacaoAjudaRepository ajudaRepository;
    private final PacienteRepository pacienteRepository;

    public SolicitacaoAjudaController(SolicitacaoAjudaRepository ajudaRepository,
                                       PacienteRepository pacienteRepository) {
        this.ajudaRepository = ajudaRepository;
        this.pacienteRepository = pacienteRepository;
    }

    @PostMapping("/{pacienteId}")
    public ResponseEntity<SolicitacaoAjuda> solicitar(@PathVariable Long pacienteId) {
        Optional<Paciente> paciente = pacienteRepository.findById(pacienteId);
        if (paciente.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        SolicitacaoAjuda s = new SolicitacaoAjuda();
        s.setPaciente(paciente.get());
        s.setAtendida(false);
        s.setDataHora(LocalDateTime.now()
            .format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm")));
        return ResponseEntity.ok(ajudaRepository.save(s));
    }

    @GetMapping("/pendentes")
    public List<SolicitacaoAjuda> listarPendentes() {
        return ajudaRepository.findByAtendidaFalse();
    }

    @PutMapping("/{id}/atender")
    public ResponseEntity<Void> atender(@PathVariable Long id) {
        Optional<SolicitacaoAjuda> opt = ajudaRepository.findById(id);
        if (opt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        SolicitacaoAjuda s = opt.get();
        s.setAtendida(true);
        ajudaRepository.save(s);
        return ResponseEntity.noContent().build();
    }
}
