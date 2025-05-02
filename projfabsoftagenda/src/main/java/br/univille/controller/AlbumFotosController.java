package br.univille.controller;

import br.univille.entity.AlbumFotos;
import br.univille.service.AlbumFotosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/albumfotos")
public class AlbumFotosController {

    @Autowired
    private AlbumFotosService service;

    @GetMapping
    public ResponseEntity<List<AlbumFotos>> getAll() {
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<AlbumFotos> post(@RequestBody AlbumFotos album) {
        if (album == null || album.getId() != 0) return ResponseEntity.badRequest().build();
        service.save(album);
        return new ResponseEntity<>(album, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AlbumFotos> put(@PathVariable long id, @RequestBody AlbumFotos album) {
        var antigo = service.getById(id);
        if (id <= 0 || album == null || antigo == null) return ResponseEntity.badRequest().build();
        antigo.setFotos(album.getFotos());
        service.save(antigo);
        return new ResponseEntity<>(antigo, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<AlbumFotos> delete(@PathVariable long id) {
        var existente = service.getById(id);
        if (id <= 0 || existente == null) return ResponseEntity.badRequest().build();
        service.delete(id);
        return new ResponseEntity<>(existente, HttpStatus.OK);
    }
}