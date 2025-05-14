package br.univille.projfabsoftagenda.service.impl;

import br.univille.projfabsoftagenda.entity.Lembrete;
import br.univille.projfabsoftagenda.repository.LembreteRepository;
import br.univille.projfabsoftagenda.service.LembreteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LembreteServiceImpl implements LembreteService {

    @Autowired
    private LembreteRepository repository;

    @Override
    public List<Lembrete> listarTodos() {
        return repository.findAll();
    }

    @Override
    public Optional<Lembrete> buscarPorId(Long id) {
        return repository.findById(id);
    }

    @Override
    public Lembrete salvar(Lembrete lembrete) {
        return repository.save(lembrete);
    }

    @Override
    public void deletar(Long id) {
        repository.deleteById(id);
    }
}
