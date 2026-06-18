package br.univille.projfabsoftagenda.controller;

import br.univille.projfabsoftagenda.entity.Foto;
import br.univille.projfabsoftagenda.entity.Paciente;
import br.univille.projfabsoftagenda.repository.PacienteRepository;
import br.univille.projfabsoftagenda.service.FotoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/fotos-familiares")
public class FotoController {

    private final FotoService service;
    private final PacienteRepository pacienteRepository;

    public FotoController(FotoService service, PacienteRepository pacienteRepository) {
        this.service = service;
        this.pacienteRepository = pacienteRepository;
    }

    @GetMapping
    public List<Foto> listarTodas() {
        return service.listarTodas();
    }

    @GetMapping("/paciente/{pacienteId}")
    public ResponseEntity<List<Foto>> listarPorPaciente(@PathVariable Long pacienteId) {
        Paciente paciente = pacienteRepository.findById(pacienteId).orElse(null);
        if (paciente == null) {
            return ResponseEntity.notFound().build();
        }
        List<Foto> fotos = (paciente.getAlbum() != null) ? paciente.getAlbum().getFotos() : new ArrayList<>();
        return ResponseEntity.ok(fotos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Foto> buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id)
                     .map(ResponseEntity::ok)
                     .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Foto criar(@RequestBody Foto foto) {
        return service.salvar(foto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Foto> atualizar(@PathVariable Long id, @RequestBody Foto novaFoto) {
        return service.buscarPorId(id)
                     .map(fotoExistente -> {
                         fotoExistente.setDescricao(novaFoto.getDescricao());
                         fotoExistente.setImagem(novaFoto.getImagem());
                         return ResponseEntity.ok(service.salvar(fotoExistente));
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