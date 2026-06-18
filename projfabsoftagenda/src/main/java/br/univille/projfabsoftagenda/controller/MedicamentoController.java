package br.univille.projfabsoftagenda.controller;

import br.univille.projfabsoftagenda.entity.Medicamento;
import br.univille.projfabsoftagenda.repository.MedicamentoRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/medicamentos")
@CrossOrigin(origins = "*")
public class MedicamentoController {

    private final MedicamentoRepository repository;

    public MedicamentoController(MedicamentoRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Medicamento> listarTodos() {
        return repository.findAll();
    }

    @GetMapping("/paciente/{pacienteId}")
    public List<Medicamento> listarPorPaciente(@PathVariable Long pacienteId) {
        return repository.findByPacienteId(pacienteId);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Medicamento> buscarPorId(@PathVariable Long id) {
        return repository.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Medicamento> criar(@RequestBody Medicamento medicamento) {
        return ResponseEntity.ok(repository.save(medicamento));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Medicamento> atualizar(@PathVariable Long id, @RequestBody Medicamento novo) {
        return repository.findById(id).map(m -> {
            m.setNome(novo.getNome());
            m.setDosagem(novo.getDosagem());
            m.setHorario(novo.getHorario());
            m.setObservacao(novo.getObservacao());
            m.setAtivo(novo.isAtivo());
            m.setPaciente(novo.getPaciente());
            return ResponseEntity.ok(repository.save(m));
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
