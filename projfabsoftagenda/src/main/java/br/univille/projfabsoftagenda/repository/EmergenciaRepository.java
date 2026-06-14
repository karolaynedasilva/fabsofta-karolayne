package br.univille.projfabsoftagenda.repository;

import br.univille.projfabsoftagenda.entity.Emergencia;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmergenciaRepository extends JpaRepository<Emergencia, Long> {
    List<Emergencia> findByPacienteId(Long pacienteId);
}