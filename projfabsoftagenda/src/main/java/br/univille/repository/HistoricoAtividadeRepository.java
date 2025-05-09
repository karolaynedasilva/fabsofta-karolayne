package br.univille.repository;

import br.univille.entity.HistoricoAtividade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoricoAtividadeRepository extends JpaRepository<HistoricoAtividade, Long> {
}
