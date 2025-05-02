package br.univille.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.univille.entity.HistoricoAtividade;

@Repository
public interface HistoricoAtividadeRepository extends JpaRepository<HistoricoAtividade, Long> {
}