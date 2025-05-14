package br.univille.projfabsoftagenda.service;

import br.univille.projfabsoftagenda.entity.Lembrete;

import java.util.List;
import java.util.Optional;

public interface LembreteService {
    List<Lembrete> listarTodos();
    Optional<Lembrete> buscarPorId(Long id);
    Lembrete salvar(Lembrete lembrete);
    void deletar(Long id);
}
