package br.univille.service;

import org.springframework.stereotype.Service;

import br.univille.entity.Cuidador;
import br.univille.repository.CuidadorRepository;
import java.util.List;
import java.util.Optional;

@Service
public class CuidadorService {

    private final CuidadorRepository repository;

    public CuidadorService(CuidadorRepository repository) {
        this.repository = repository;
    }

    public List<Cuidador> listarTodos() {
        return repository.findAll();
    }

    public Optional<Cuidador> buscarPorId(Long id) {
        return repository.findById(id);
    }

    public Cuidador salvar(Cuidador cuidador) {
        return repository.save(cuidador);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}