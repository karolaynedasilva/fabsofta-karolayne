package br.univille.projfabsoftagenda.repository;

import br.univille.projfabsoftagenda.entity.Medicamento;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MedicamentoRepository extends JpaRepository<Medicamento, Long> {
    List<Medicamento> findByPacienteId(Long pacienteId);
}
