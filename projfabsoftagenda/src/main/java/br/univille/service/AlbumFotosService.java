package br.univille.service;

import br.univille.entity.AlbumFotos;

import java.util.List;
import java.util.Optional;

public interface AlbumFotosService {
    List<AlbumFotos> listarTodos();
    Optional<AlbumFotos> buscarPorId(Long id);
    AlbumFotos salvar(AlbumFotos album);
    void deletar(Long id);
}
