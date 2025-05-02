package br.univille.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import br.univille.entity.AtividadeInterativa;
import br.univille.repository.AtividadeRepository;

@Service
public class AtividadeService {

    private final AtividadeRepository repository;

    public AtividadeService(AtividadeRepository repository) {
        this.repository = repository;
    }

    public List<AtividadeInterativa> listarTodas() {
        return repository.findAll();
    }

    public Optional<AtividadeInterativa> buscarPorId(Long id) {
        return repository.findById(id);
    }

    public AtividadeInterativa salvar(AtividadeInterativa atividade) {
        return repository.save(atividade);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}
