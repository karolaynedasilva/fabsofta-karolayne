package br.univille.projfabsoftagenda.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.univille.projfabsoftagenda.entity.Cuidador;

public interface CuidadorRepository extends JpaRepository<Cuidador, Long> {
    
}
