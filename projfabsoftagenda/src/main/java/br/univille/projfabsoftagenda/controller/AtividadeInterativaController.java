package br.univille.projfabsoftagenda.controller;

import br.univille.projfabsoftagenda.entity.AtividadeInterativa;
import br.univille.projfabsoftagenda.service.AtividadeInterativaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/atividades")
public class AtividadeInterativaController {

    private final AtividadeInterativaService service;

    public AtividadeInterativaController(AtividadeInterativaService service) {
        this.service = service;
    }

    @GetMapping
    public List<AtividadeInterativa> listarTodos() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<AtividadeInterativa> buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id)
                     .map(ResponseEntity::ok)
                     .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public AtividadeInterativa criar(@RequestBody AtividadeInterativa atividade) {
        return service.salvar(atividade);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AtividadeInterativa> atualizar(@PathVariable Long id, @RequestBody AtividadeInterativa novaAtividade) {
        return service.buscarPorId(id)
                     .map(atividadeExistente -> {
                         atividadeExistente.setTipo(novaAtividade.getTipo());
                         atividadeExistente.setDescricao(novaAtividade.getDescricao());
                         return ResponseEntity.ok(service.salvar(atividadeExistente));
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
