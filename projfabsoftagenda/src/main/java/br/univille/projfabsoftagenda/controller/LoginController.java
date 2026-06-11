package br.univille.projfabsoftagenda.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class LoginController {

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> dados) {
        String email = dados.get("email");
        String senha = dados.get("senha");

        if ("admin@teste.com".equals(email) && "admin123".equals(senha)) {
            return ResponseEntity.ok("Administrador");
        }

        if ("cuidador@teste.com".equals(email) && "cuidador123".equals(senha)) {
            return ResponseEntity.ok("Cuidador");
        }

        if ("paciente@teste.com".equals(email) && "paciente123".equals(senha)) {
            return ResponseEntity.ok("Paciente:1");
        }

        return ResponseEntity.status(401).build();
    }
}