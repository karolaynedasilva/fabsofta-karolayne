package br.univille.projfabsoftagenda.controller;

import br.univille.projfabsoftagenda.entity.ContatoEmergencia;
import br.univille.projfabsoftagenda.repository.ContatoEmergenciaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/contatos-emergencia")
@CrossOrigin(origins = "*")
public class ContatoEmergenciaController {

    private final ContatoEmergenciaRepository repository;

    public ContatoEmergenciaController(ContatoEmergenciaRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/paciente/{pacienteId}")
    public List<ContatoEmergencia> listarPorPaciente(@PathVariable Long pacienteId) {
        return repository.findByPacienteId(pacienteId);
    }

    @PostMapping
    public ResponseEntity<ContatoEmergencia> criar(@RequestBody ContatoEmergencia contato) {
        return ResponseEntity.ok(repository.save(contato));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ContatoEmergencia> atualizar(@PathVariable Long id, @RequestBody ContatoEmergencia novo) {
        return repository.findById(id).map(c -> {
            c.setNome(novo.getNome());
            c.setTelefone(novo.getTelefone());
            c.setRelacao(novo.getRelacao());
            return ResponseEntity.ok(repository.save(c));
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
