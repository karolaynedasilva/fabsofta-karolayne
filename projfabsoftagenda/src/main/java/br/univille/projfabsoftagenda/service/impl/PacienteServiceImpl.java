package br.univille.projfabsoftagenda.service.impl;

import br.univille.projfabsoftagenda.entity.Paciente;
import br.univille.projfabsoftagenda.repository.PacienteRepository;
import br.univille.projfabsoftagenda.service.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PacienteServiceImpl implements PacienteService {

    @Autowired
    private PacienteRepository repository;

    @Override
    public List<Paciente> listarTodos() {
        return repository.findAll();
    }

    @Override
    public Optional<Paciente> buscarPorId(Long id) {
        return repository.findById(id);
    }

    @Override
    public Paciente salvar(Paciente paciente) {
        return repository.save(paciente);
    }

    @Override
    public void deletar(Long id) {
        repository.deleteById(id);
    }
}
