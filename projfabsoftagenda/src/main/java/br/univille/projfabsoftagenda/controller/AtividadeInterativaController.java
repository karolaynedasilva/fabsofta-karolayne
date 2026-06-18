package br.univille.projfabsoftagenda.controller;

import br.univille.projfabsoftagenda.entity.AtividadeInterativa;
import br.univille.projfabsoftagenda.entity.Paciente;
import br.univille.projfabsoftagenda.repository.AtividadeInterativaRepository;
import br.univille.projfabsoftagenda.repository.PacienteRepository;
import br.univille.projfabsoftagenda.service.AtividadeInterativaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/atividades")
public class AtividadeInterativaController {

    private final AtividadeInterativaService service;
    private final PacienteRepository pacienteRepository;
    private final AtividadeInterativaRepository atividadeRepository;

    public AtividadeInterativaController(AtividadeInterativaService service, PacienteRepository pacienteRepository, AtividadeInterativaRepository atividadeRepository) {
        this.service = service;
        this.pacienteRepository = pacienteRepository;
        this.atividadeRepository = atividadeRepository;
    }

    @GetMapping("/paciente/{pacienteId}")
    public List<AtividadeInterativa> listarPorPaciente(@PathVariable Long pacienteId) {
        return atividadeRepository.findByPacienteId(pacienteId);
    }

    @GetMapping
    public List<AtividadeInterativa> listarTodos() {
        return service.listarTodos();
    }

    @GetMapping("/paciente/{pacienteId}")
    public List<AtividadeInterativa> listarPorPaciente(@PathVariable Long pacienteId) {
        return service.listarPorPaciente(pacienteId);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AtividadeInterativa> buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id)
                     .map(ResponseEntity::ok)
                     .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public AtividadeInterativa criar(@RequestBody AtividadeInterativa atividade) {
        if (atividade.getPaciente() != null && atividade.getPaciente().getId() > 0) {
            Paciente paciente = pacienteRepository.findById(atividade.getPaciente().getId()).orElse(null);
            atividade.setPaciente(paciente);
        }
        return service.salvar(atividade);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AtividadeInterativa> atualizar(@PathVariable Long id, @RequestBody AtividadeInterativa novaAtividade) {
        return service.buscarPorId(id)
                     .map(atividadeExistente -> {
                         atividadeExistente.setTitulo(novaAtividade.getTitulo());
                         atividadeExistente.setTipo(novaAtividade.getTipo());
                         atividadeExistente.setDescricao(novaAtividade.getDescricao());
                         atividadeExistente.setPaciente(novaAtividade.getPaciente());
                         return ResponseEntity.ok(service.salvar(atividadeExistente));
                     })
                     .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}/confirmar")
    public ResponseEntity<AtividadeInterativa> confirmar(@PathVariable Long id) {
        return service.buscarPorId(id).map(a -> {
            a.setConfirmado(true);
            return ResponseEntity.ok(service.salvar(a));
        }).orElse(ResponseEntity.notFound().build());
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