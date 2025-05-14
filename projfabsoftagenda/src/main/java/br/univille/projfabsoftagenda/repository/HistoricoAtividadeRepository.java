package br.univille.projfabsoftagenda.repository;

import br.univille.projfabsoftagenda.entity.HistoricoAtividade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoricoAtividadeRepository extends JpaRepository<HistoricoAtividade, Long> {
}
