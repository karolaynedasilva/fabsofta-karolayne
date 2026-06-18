package br.univille.projfabsoftagenda.repository;

import br.univille.projfabsoftagenda.entity.EvolucaoPaciente;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EvolucaoPacienteRepository extends JpaRepository<EvolucaoPaciente, Long> {
    List<EvolucaoPaciente> findByPacienteIdOrderByIdDesc(Long pacienteId);
}
