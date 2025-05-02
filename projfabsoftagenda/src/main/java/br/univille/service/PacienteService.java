package br.univille.service;

import org.springframework.stereotype.Service;

import br.univille.entity.Paciente;
import br.univille.repository.PacienteRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PacienteService {

    private final PacienteRepository repository;

    public PacienteService(PacienteRepository repository) {
        this.repository = repository;
    }

    public List<Paciente> listarTodos() {
        return repository.findAll();
    }

    public Optional<Paciente> buscarPorId(Long id) {
        return repository.findById(id);
    }

    public Paciente salvar(Paciente paciente) {
        return repository.save(paciente);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}
