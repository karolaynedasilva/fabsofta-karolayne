package br.univille.service;

import java.util.List;

import br.univille.entity.AtividadeInterativa;

public interface AtividadeInterativaService {
    List<AtividadeInterativa> getAll();
    AtividadeInterativa getById(long id);
    void save(AtividadeInterativa atividade);
    void delete(long id);
}