package br.univille.service;

import br.univille.entity.Paciente;

import java.util.List;
import java.util.Optional;

public interface PacienteService {
    List<Paciente> listarTodos();
    Optional<Paciente> buscarPorId(Long id);
    Paciente salvar(Paciente paciente);
    void deletar(Long id);
}
