package br.univille.projfabsoftagenda.controller;

import br.univille.projfabsoftagenda.entity.Cuidador;
import br.univille.projfabsoftagenda.entity.Paciente;
import br.univille.projfabsoftagenda.repository.CuidadorRepository;
import br.univille.projfabsoftagenda.repository.PacienteRepository;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class LoginController {

    private final CuidadorRepository cuidadorRepository;
    private final PacienteRepository pacienteRepository;

    public LoginController(CuidadorRepository cuidadorRepository, PacienteRepository pacienteRepository) {
        this.cuidadorRepository = cuidadorRepository;
        this.pacienteRepository = pacienteRepository;
    }

    @PostMapping(value = "/login", produces = MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<String> login(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String senha = credentials.get("senha");

        Optional<Cuidador> cuidador = cuidadorRepository.findByEmailAndSenha(email, senha);
        if (cuidador.isPresent()) {
            return ResponseEntity.ok("Cuidador:" + cuidador.get().getNome());
        }

        Optional<Paciente> paciente = pacienteRepository.findByEmailAndSenha(email, senha);
        if (paciente.isPresent()) {
            return ResponseEntity.ok("Paciente:" + paciente.get().getId() + ":" + paciente.get().getNome());
        }

        return ResponseEntity.status(401).body("Email ou senha inválidos");
    }
}
