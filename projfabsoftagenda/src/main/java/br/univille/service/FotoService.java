package br.univille.service;

import br.univille.entity.Foto;

import java.util.List;
import java.util.Optional;

public interface FotoService {
    List<Foto> listarTodas();
    Optional<Foto> buscarPorId(Long id);
    Foto salvar(Foto foto);
    void deletar(Long id);
}
