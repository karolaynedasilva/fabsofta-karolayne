package br.univille.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.univille.entity.Cuidador;

public interface CuidadorRepository extends JpaRepository<Cuidador, Long> {
    
}
