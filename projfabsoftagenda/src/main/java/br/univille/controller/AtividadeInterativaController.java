package br.univille.controller;

import br.univille.entity.AtividadeInterativa;
import br.univille.service.AtividadeInterativaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/atividades")
public class AtividadeInterativaController {

    @Autowired
    private AtividadeInterativaService service;

    @GetMapping
    public ResponseEntity<List<AtividadeInterativa>> getAll() {
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<AtividadeInterativa> post(@RequestBody AtividadeInterativa atividade) {
        if (atividade == null || atividade.getId() != 0) return ResponseEntity.badRequest().build();
        service.save(atividade);
        return new ResponseEntity<>(atividade, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AtividadeInterativa> put(@PathVariable long id, @RequestBody AtividadeInterativa atividade) {
        var antiga = service.getById(id);
        if (id <= 0 || atividade == null || antiga == null) return ResponseEntity.badRequest().build();
        antiga.setDescricao(atividade.getDescricao());
        antiga.setTipo(atividade.getTipo());
        service.save(antiga);
        return new ResponseEntity<>(antiga, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<AtividadeInterativa> delete(@PathVariable long id) {
        var existente = service.getById(id);
        if (id <= 0 || existente == null) return ResponseEntity.badRequest().build();
        service.delete(id);
        return new ResponseEntity<>(existente, HttpStatus.OK);
    }
}