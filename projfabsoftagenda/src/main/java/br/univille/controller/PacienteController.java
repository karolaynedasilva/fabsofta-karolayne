package br.univille.controller;

import br.univille.entity.Paciente;
import br.univille.service.PacienteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pacientes")
public class PacienteController {

    private final PacienteService service;

    public PacienteController(PacienteService service) {
        this.service = service;
    }

    @GetMapping
    public List<Paciente> listarTodos() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Paciente> buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id)
                     .map(ResponseEntity::ok)
                     .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Paciente criar(@RequestBody Paciente paciente) {
        return service.salvar(paciente);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Paciente> atualizar(@PathVariable Long id, @RequestBody Paciente novoPaciente) {
        return service.buscarPorId(id)
                     .map(pacienteExistente -> {
                         pacienteExistente.setNome(novoPaciente.getNome());
                         pacienteExistente.setEmail(novoPaciente.getEmail());
                         pacienteExistente.setSenha(novoPaciente.getSenha());
                         pacienteExistente.setTelefone(novoPaciente.getTelefone());
                         pacienteExistente.setAlbum(novoPaciente.getAlbum());
                         pacienteExistente.setEstadoEmocionalAtual(novoPaciente.getEstadoEmocionalAtual());
                         pacienteExistente.setAtividades(novoPaciente.getAtividades());
                         pacienteExistente.setHistorico(novoPaciente.getHistorico());
                         return ResponseEntity.ok(service.salvar(pacienteExistente));
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
