package br.univille.projfabsoftagenda.service.impl;

import br.univille.projfabsoftagenda.entity.Cuidador;
import br.univille.projfabsoftagenda.repository.CuidadorRepository;
import br.univille.projfabsoftagenda.service.CuidadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CuidadorServiceImpl implements CuidadorService {

    @Autowired
    private CuidadorRepository repository;

    @Override
    public List<Cuidador> listarTodos() {
        return repository.findAll();
    }

    @Override
    public Optional<Cuidador> buscarPorId(Long id) {
        return repository.findById(id);
    }

    @Override
    public Cuidador salvar(Cuidador cuidador) {
        return repository.save(cuidador);
    }

    @Override
    public void deletar(Long id) {
        repository.deleteById(id);
    }
}
