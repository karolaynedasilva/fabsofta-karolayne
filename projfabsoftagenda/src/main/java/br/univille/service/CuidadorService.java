package br.univille.service;

import br.univille.entity.Cuidador;

import java.util.List;
import java.util.Optional;

public interface CuidadorService {
    List<Cuidador> listarTodos();
    Optional<Cuidador> buscarPorId(Long id);
    Cuidador salvar(Cuidador cuidador);
    void deletar(Long id);
}
