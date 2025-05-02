package br.univille.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.univille.entity.Lembrete;

public interface LembreteRepository extends JpaRepository<Lembrete, Long> {

}
