package br.univille.projfabsoftagenda.service.impl;

import br.univille.projfabsoftagenda.entity.Foto;
import br.univille.projfabsoftagenda.repository.FotoRepository;
import br.univille.projfabsoftagenda.service.FotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FotoServiceImpl implements FotoService {

    @Autowired
    private FotoRepository repository;

    @Override
    public List<Foto> listarTodas() {
        return repository.findAll();
    }

    @Override
    public Optional<Foto> buscarPorId(Long id) {
        return repository.findById(id);
    }

    @Override
    public Foto salvar(Foto foto) {
        return repository.save(foto);
    }

    @Override
    public void deletar(Long id) {
        repository.deleteById(id);
    }
}
