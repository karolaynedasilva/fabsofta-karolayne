package br.univille.projfabsoftagenda.controller;

import br.univille.projfabsoftagenda.entity.Cuidador;
import br.univille.projfabsoftagenda.service.CuidadorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cuidadores")
public class CuidadorController {

    private final CuidadorService service;

    public CuidadorController(CuidadorService service) {
        this.service = service;
    }

    @GetMapping
    public List<Cuidador> listarTodos() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cuidador> buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id)
                     .map(ResponseEntity::ok)
                     .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Cuidador criar(@RequestBody Cuidador cuidador) {
        return service.salvar(cuidador);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cuidador> atualizar(@PathVariable Long id, @RequestBody Cuidador novoCuidador) {
        return service.buscarPorId(id)
                     .map(cuidadorExistente -> {
                         cuidadorExistente.setNome(novoCuidador.getNome());
                         cuidadorExistente.setEmail(novoCuidador.getEmail());
                         cuidadorExistente.setSenha(novoCuidador.getSenha());
                         cuidadorExistente.setPacientes(novoCuidador.getPacientes());
                         return ResponseEntity.ok(service.salvar(cuidadorExistente));
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
