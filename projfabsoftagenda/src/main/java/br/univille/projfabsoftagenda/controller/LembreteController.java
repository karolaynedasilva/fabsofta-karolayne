package br.univille.projfabsoftagenda.controller;

import br.univille.projfabsoftagenda.entity.Lembrete;
import br.univille.projfabsoftagenda.service.LembreteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lembretes")
public class LembreteController {

    private final LembreteService service;

    public LembreteController(LembreteService service) {
        this.service = service;
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
        return service.salvar(lembrete);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Lembrete> atualizar(@PathVariable Long id, @RequestBody Lembrete novoLembrete) {
        return service.buscarPorId(id)
                     .map(lembreteExistente -> {
                         lembreteExistente.setDescricao(novoLembrete.getDescricao());
                         lembreteExistente.setDataHora(novoLembrete.getDataHora());
                         lembreteExistente.setPaciente(novoLembrete.getPaciente());
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
