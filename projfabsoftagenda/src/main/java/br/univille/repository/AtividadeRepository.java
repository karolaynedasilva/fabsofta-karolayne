package br.univille.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.entity.AtividadeInterativa;

public interface AtividadeRepository extends JpaRepository<AtividadeInterativa, Long> {

}
