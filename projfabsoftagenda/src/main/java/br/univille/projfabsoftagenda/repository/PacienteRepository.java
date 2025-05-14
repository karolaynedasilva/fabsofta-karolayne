package br.univille.projfabsoftagenda.repository;

import br.univille.projfabsoftagenda.entity.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PacienteRepository extends JpaRepository<Paciente, Long> {
}
