package br.univille.service;

import org.springframework.stereotype.Service;

import br.univille.entity.Lembrete;
import br.univille.repository.LembreteRepository;

import java.util.List;
import java.util.Optional;

@Service
public class LembreteService {

    private final LembreteRepository repository;

    public LembreteService(LembreteRepository repository) {
        this.repository = repository;
    }

    public List<Lembrete> listarTodos() {
        return repository.findAll();
    }

    public Optional<Lembrete> buscarPorId(Long id) {
        return repository.findById(id);
    }

    public Lembrete salvar(Lembrete lembrete) {
        return repository.save(lembrete);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}
