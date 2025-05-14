package br.univille.projfabsoftagenda.controller;

import br.univille.projfabsoftagenda.entity.EstadoEmocional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/estado-emocional")
public class EstadoEmocionalController {

    @GetMapping
    public EstadoEmocional[] listarEstados() {
        return EstadoEmocional.values();
    }
}
