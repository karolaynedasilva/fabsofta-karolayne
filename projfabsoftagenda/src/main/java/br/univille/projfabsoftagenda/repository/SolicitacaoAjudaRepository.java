package br.univille.projfabsoftagenda.repository;

import br.univille.projfabsoftagenda.entity.SolicitacaoAjuda;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface SolicitacaoAjudaRepository extends JpaRepository<SolicitacaoAjuda, Long> {
    List<SolicitacaoAjuda> findByAtendidaFalse();
}
