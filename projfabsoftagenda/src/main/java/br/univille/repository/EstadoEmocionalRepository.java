package br.univille.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.entity.EstadoEmocional;

public interface EstadoEmocionalRepository extends JpaRepository<EstadoEmocional, Long> {
    
}
