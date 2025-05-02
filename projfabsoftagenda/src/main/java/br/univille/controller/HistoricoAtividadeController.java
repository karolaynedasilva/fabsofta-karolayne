package br.univille.controller;

import br.univille.entity.HistoricoAtividade;
import br.univille.service.HistoricoAtividadeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/historicos")
public class HistoricoAtividadeController {

    @Autowired
    private HistoricoAtividadeService service;

    @GetMapping
    public ResponseEntity<List<HistoricoAtividade>> getAll() {
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<HistoricoAtividade> post(@RequestBody HistoricoAtividade hist) {
        if (hist == null || hist.getId() != 0) return ResponseEntity.badRequest().build();
        service.save(hist);
        return new ResponseEntity<>(hist, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HistoricoAtividade> put(@PathVariable long id, @RequestBody HistoricoAtividade hist) {
        var antigo = service.getById(id);
        if (id <= 0 || hist == null || antigo == null) return ResponseEntity.badRequest().build();
        antigo.setDescricao(hist.getDescricao());
        antigo.setData(hist.getData());
        service.save(antigo);
        return new ResponseEntity<>(antigo, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HistoricoAtividade> delete(@PathVariable long id) {
        var existente = service.getById(id);
        if (id <= 0 || existente == null) return ResponseEntity.badRequest().build();
        service.delete(id);
        return new ResponseEntity<>(existente, HttpStatus.OK);
    }
}
