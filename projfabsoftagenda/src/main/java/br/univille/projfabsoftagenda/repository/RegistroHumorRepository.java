package br.univille.projfabsoftagenda.repository;

import br.univille.projfabsoftagenda.entity.RegistroHumor;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface RegistroHumorRepository extends JpaRepository<RegistroHumor, Long> {
    List<RegistroHumor> findByPacienteIdOrderByIdDesc(Long pacienteId);
}
