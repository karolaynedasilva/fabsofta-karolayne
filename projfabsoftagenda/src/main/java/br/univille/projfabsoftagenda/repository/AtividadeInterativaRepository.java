package br.univille.projfabsoftagenda.repository;

import br.univille.projfabsoftagenda.entity.AtividadeInterativa;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AtividadeInterativaRepository extends JpaRepository<AtividadeInterativa, Long> {
    List<AtividadeInterativa> findByPacienteId(Long pacienteId);
}