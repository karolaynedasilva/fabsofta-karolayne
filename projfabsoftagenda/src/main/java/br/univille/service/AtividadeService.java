package br.univille.service;

import br.univille.entity.AtividadeInterativa;

import java.util.List;
import java.util.Optional;

public interface AtividadeService {
    List<AtividadeInterativa> listarTodos();
    Optional<AtividadeInterativa> buscarPorId(Long id);
    AtividadeInterativa salvar(AtividadeInterativa atividade);
    void deletar(Long id);
}
