package br.univille.projfabsoftagenda.controller;

import br.univille.projfabsoftagenda.entity.AlbumFotos;
import br.univille.projfabsoftagenda.service.AlbumFotosService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/albuns")
public class AlbumFotosController {

    private final AlbumFotosService service;

    public AlbumFotosController(AlbumFotosService service) {
        this.service = service;
    }

    @GetMapping
    public List<AlbumFotos> listarTodos() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<AlbumFotos> buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id)
                     .map(ResponseEntity::ok)
                     .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public AlbumFotos criar(@RequestBody AlbumFotos album) {
        return service.salvar(album);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AlbumFotos> atualizar(@PathVariable Long id, @RequestBody AlbumFotos novoAlbum) {
        return service.buscarPorId(id)
                     .map(albumExistente -> {
                         albumExistente.setFotos(novoAlbum.getFotos());
                         return ResponseEntity.ok(service.salvar(albumExistente));
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
