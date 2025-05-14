package br.univille.projfabsoftagenda.controller;

import br.univille.projfabsoftagenda.entity.HistoricoAtividade;
import br.univille.projfabsoftagenda.service.HistoricoAtividadeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/historico-atividades")
public class HistoricoAtividadeController {

    private final HistoricoAtividadeService service;

    public HistoricoAtividadeController(HistoricoAtividadeService service) {
        this.service = service;
    }

    @GetMapping
    public List<HistoricoAtividade> listarTodas() {
        return service.listarTodas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<HistoricoAtividade> buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id)
                     .map(ResponseEntity::ok)
                     .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public HistoricoAtividade criar(@RequestBody HistoricoAtividade atividade) {
        return service.salvar(atividade);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HistoricoAtividade> atualizar(@PathVariable Long id, @RequestBody HistoricoAtividade novaAtividade) {
        return service.buscarPorId(id)
                     .map(atividadeExistente -> {
                         atividadeExistente.setData(novaAtividade.getData());
                         atividadeExistente.setDescricao(novaAtividade.getDescricao());
                         atividadeExistente.setFoiRealizada(novaAtividade.isFoiRealizada());
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
