package br.univille.service;

import java.util.List;
import br.univille.entity.AlbumFotos;

public interface AlbumFotosService {
    List<AlbumFotos> getAll();
    AlbumFotos getById(long id);
    void save(AlbumFotos album);
    void delete(long id);
}
