package br.univille.controller;

import br.univille.entity.EstadoEmocional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/estado-emocional")
public class EstadoEmocionalController {

    @GetMapping
    public EstadoEmocional[] listarEstados() {
        return EstadoEmocional.values();
    }
}
