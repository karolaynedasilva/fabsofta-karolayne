package br.univille.projfabsoftagenda.repository;

import br.univille.projfabsoftagenda.entity.ContatoEmergencia;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ContatoEmergenciaRepository extends JpaRepository<ContatoEmergencia, Long> {
    List<ContatoEmergencia> findByPacienteId(Long pacienteId);
}
