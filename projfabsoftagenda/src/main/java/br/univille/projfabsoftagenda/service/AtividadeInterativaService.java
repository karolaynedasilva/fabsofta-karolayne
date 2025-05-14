package br.univille.projfabsoftagenda.service;

import br.univille.projfabsoftagenda.entity.AtividadeInterativa;

import java.util.List;
import java.util.Optional;

public interface AtividadeInterativaService {
    List<AtividadeInterativa> listarTodos();
    Optional<AtividadeInterativa> buscarPorId(Long id);
    AtividadeInterativa salvar(AtividadeInterativa atividade);
    void deletar(Long id);
}
