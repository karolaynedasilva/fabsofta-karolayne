package br.univille.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import br.univille.entity.Foto;
import br.univille.repository.FotoRepository;

@Service
public class FotoService {

    private final FotoRepository repository;

    public FotoService(FotoRepository repository) {
        this.repository = repository;
    }

    public List<Foto> listarTodas() {
        return repository.findAll();
    }

    public Optional<Foto> buscarPorId(Long id) {
        return repository.findById(id);
    }

    public Foto salvar(Foto foto) {
        return repository.save(foto);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}