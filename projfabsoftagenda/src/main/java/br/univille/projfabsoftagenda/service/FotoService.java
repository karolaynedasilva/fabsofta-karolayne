package br.univille.projfabsoftagenda.service;

import br.univille.projfabsoftagenda.entity.Foto;

import java.util.List;
import java.util.Optional;

public interface FotoService {
    List<Foto> listarTodas();
    Optional<Foto> buscarPorId(Long id);
    Foto salvar(Foto foto);
    void deletar(Long id);
}
