package br.univille.service;

import br.univille.entity.HistoricoAtividade;

import java.util.List;
import java.util.Optional;

public interface HistoricoAtividadeService {
    List<HistoricoAtividade> listarTodas();
    Optional<HistoricoAtividade> buscarPorId(Long id);
    HistoricoAtividade salvar(HistoricoAtividade atividade);
    void deletar(Long id);
}
