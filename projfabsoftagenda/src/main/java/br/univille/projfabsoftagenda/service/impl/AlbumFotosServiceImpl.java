package br.univille.projfabsoftagenda.service.impl;

import br.univille.projfabsoftagenda.entity.AlbumFotos;
import br.univille.projfabsoftagenda.repository.AlbumFotosRepository;
import br.univille.projfabsoftagenda.service.AlbumFotosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlbumFotosServiceImpl implements AlbumFotosService {

    @Autowired
    private AlbumFotosRepository albumFotosRepository;

    @Override
    public List<AlbumFotos> listarTodos() {
        return albumFotosRepository.findAll();
    }

    @Override
    public Optional<AlbumFotos> buscarPorId(Long id) {
        return albumFotosRepository.findById(id);
    }

    @Override
    public AlbumFotos salvar(AlbumFotos album) {
        return albumFotosRepository.save(album);
    }

    @Override
    public void deletar(Long id) {
        albumFotosRepository.deleteById(id);
    }
}
