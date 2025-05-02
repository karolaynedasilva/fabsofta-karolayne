package br.univille.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.entity.Paciente;

public interface PacienteRepository extends JpaRepository<Paciente, Long>{
    
}
