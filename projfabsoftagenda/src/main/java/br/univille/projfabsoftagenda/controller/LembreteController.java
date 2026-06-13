package br.univille.projfabsoftagenda.controller;

import br.univille.projfabsoftagenda.entity.Lembrete;
import br.univille.projfabsoftagenda.entity.Paciente;
import br.univille.projfabsoftagenda.repository.LembreteRepository;
import br.univille.projfabsoftagenda.repository.PacienteRepository;
import br.univille.projfabsoftagenda.service.LembreteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/lembretes")
public class LembreteController {

    private final LembreteService service;
    private final PacienteRepository pacienteRepository;
    private final LembreteRepository lembreteRepository;

    public LembreteController(LembreteService service, PacienteRepository pacienteRepository, LembreteRepository lembreteRepository) {
        this.service = service;
        this.pacienteRepository = pacienteRepository;
        this.lembreteRepository = lembreteRepository;
    }

    @GetMapping("/paciente/{pacienteId}")
    public List<Lembrete> listarPorPaciente(@PathVariable Long pacienteId) {
        return lembreteRepository.findByPacienteId(pacienteId);
    }

    @GetMapping
    public List<Lembrete> listarTodos() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Lembrete> buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id)
                     .map(ResponseEntity::ok)
                     .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Lembrete criar(@RequestBody Lembrete lembrete) {
        if (lembrete.getPaciente() != null && lembrete.getPaciente().getId() > 0) {
            Paciente paciente = pacienteRepository.findById(lembrete.getPaciente().getId())
                    .orElse(null);
            lembrete.setPaciente(paciente);
        }
        return service.salvar(lembrete);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Lembrete> atualizar(@PathVariable Long id, @RequestBody Lembrete novoLembrete) {
        return service.buscarPorId(id)
                     .map(lembreteExistente -> {
                         lembreteExistente.setTitulo(novoLembrete.getTitulo());
                         lembreteExistente.setDescricao(novoLembrete.getDescricao());
                         lembreteExistente.setData(novoLembrete.getData());
                         lembreteExistente.setHora(novoLembrete.getHora());
                         if (novoLembrete.getPaciente() != null && novoLembrete.getPaciente().getId() > 0) {
                             Paciente paciente = pacienteRepository.findById(novoLembrete.getPaciente().getId())
                                     .orElse(null);
                             lembreteExistente.setPaciente(paciente);
                         }
                         return ResponseEntity.ok(service.salvar(lembreteExistente));
                     })
                     .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (service.buscarPorId(id).isPresent()) {
            service.deletar(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}