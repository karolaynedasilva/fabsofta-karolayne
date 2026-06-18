package br.univille.projfabsoftagenda.controller;

import br.univille.projfabsoftagenda.entity.RegistroHumor;
import br.univille.projfabsoftagenda.repository.PacienteRepository;
import br.univille.projfabsoftagenda.repository.RegistroHumorRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/humor")
@CrossOrigin(origins = "*")
public class RegistroHumorController {

    private final RegistroHumorRepository repository;
    private final PacienteRepository pacienteRepository;

    public RegistroHumorController(RegistroHumorRepository repository, PacienteRepository pacienteRepository) {
        this.repository = repository;
        this.pacienteRepository = pacienteRepository;
    }

    @GetMapping("/paciente/{pacienteId}")
    public List<RegistroHumor> listarPorPaciente(@PathVariable Long pacienteId) {
        return repository.findByPacienteIdOrderByIdDesc(pacienteId);
    }

    @PostMapping("/{pacienteId}")
    public ResponseEntity<RegistroHumor> registrar(@PathVariable Long pacienteId,
                                                    @RequestBody Map<String, Object> body) {
        return pacienteRepository.findById(pacienteId).map(paciente -> {
            RegistroHumor r = new RegistroHumor();
            r.setPaciente(paciente);
            r.setEmoji((String) body.get("emoji"));
            r.setValor(body.get("valor") != null ? (Integer) body.get("valor") : 3);
            r.setDataHora(LocalDateTime.now()
                .format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm")));
            return ResponseEntity.ok(repository.save(r));
        }).orElse(ResponseEntity.notFound().build());
    }
}
