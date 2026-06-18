package br.univille.projfabsoftagenda.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.projfabsoftagenda.entity.Lembrete;
import java.util.List;

public interface LembreteRepository extends JpaRepository<Lembrete, Long> {
    List<Lembrete> findByPacienteId(Long pacienteId);
}
