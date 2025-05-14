package br.univille.projfabsoftagenda.service;

import br.univille.projfabsoftagenda.entity.HistoricoAtividade;

import java.util.List;
import java.util.Optional;

public interface HistoricoAtividadeService {
    List<HistoricoAtividade> listarTodas();
    Optional<HistoricoAtividade> buscarPorId(Long id);
    HistoricoAtividade salvar(HistoricoAtividade atividade);
    void deletar(Long id);
}
