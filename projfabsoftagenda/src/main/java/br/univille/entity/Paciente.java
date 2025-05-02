package br.univille.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Paciente extends Usuario {

    @OneToOne(cascade = CascadeType.ALL)
    private AlbumFotos album;

    @Enumerated(EnumType.STRING)
    private EstadoEmocional estadoEmocionalAtual;

    @OneToMany(cascade = CascadeType.ALL)
    private List<AtividadeInterativa> atividades;

    @OneToMany(cascade = CascadeType.ALL)
    private List<HistoricoAtividade> historico;

}
