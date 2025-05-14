package br.univille.projfabsoftagenda.service;

import br.univille.projfabsoftagenda.entity.Paciente;

import java.util.List;
import java.util.Optional;

public interface PacienteService {
    List<Paciente> listarTodos();
    Optional<Paciente> buscarPorId(Long id);
    Paciente salvar(Paciente paciente);
    void deletar(Long id);
}
