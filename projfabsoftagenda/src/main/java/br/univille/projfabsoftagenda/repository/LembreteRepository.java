package br.univille.projfabsoftagenda.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.univille.projfabsoftagenda.entity.Lembrete;

public interface LembreteRepository extends JpaRepository<Lembrete, Long> {
    java.util.List<Lembrete> findByPacienteId(Long pacienteId);
}
