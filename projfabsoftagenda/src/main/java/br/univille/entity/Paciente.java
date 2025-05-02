package br.univille.entity;

import java.util.List;

public class Paciente extends Usuario {
    
    private AlbumFotos album;
    private EstadoEmocional estadoEmocionalAtual;
    private List<AtividadeInterativa> atividades;
    private List<HistoricoAtividade> historico;

}
