package br.univille.projfabsoftagenda.service;

import br.univille.projfabsoftagenda.entity.Cuidador;

import java.util.List;
import java.util.Optional;

public interface CuidadorService {
    List<Cuidador> listarTodos();
    Optional<Cuidador> buscarPorId(Long id);
    Cuidador salvar(Cuidador cuidador);
    void deletar(Long id);
}
