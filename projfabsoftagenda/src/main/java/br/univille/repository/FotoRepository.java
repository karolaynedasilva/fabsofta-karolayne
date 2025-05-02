package br.univille.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.entity.Foto;

public interface FotoRepository extends JpaRepository<Foto, Long> {

}