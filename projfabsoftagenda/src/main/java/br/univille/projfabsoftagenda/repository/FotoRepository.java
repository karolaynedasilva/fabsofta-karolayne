package br.univille.projfabsoftagenda.repository;

import br.univille.projfabsoftagenda.entity.Foto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FotoRepository extends JpaRepository<Foto, Long> {
}
