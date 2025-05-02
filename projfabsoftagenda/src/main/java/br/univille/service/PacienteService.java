package br.univille.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.entity.Paciente;
import br.univille.repository.PacienteRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PacienteService {

    @Autowired
    private PacienteRepository repository;

    public List<Paciente> getAll() {
        return repository.findAll();
    }

    public Paciente getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void save(Paciente paciente) {
        repository.save(paciente);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

}
