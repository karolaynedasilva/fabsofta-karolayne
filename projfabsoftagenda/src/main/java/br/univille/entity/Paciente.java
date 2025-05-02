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

    public AlbumFotos getAlbum() {
        return album;
    }

    public void setAlbum(AlbumFotos album) {
        this.album = album;
    }

    public EstadoEmocional getEstadoEmocionalAtual() {
        return estadoEmocionalAtual;
    }

    public void setEstadoEmocionalAtual(EstadoEmocional estadoEmocionalAtual) {
        this.estadoEmocionalAtual = estadoEmocionalAtual;
    }

    public List<AtividadeInterativa> getAtividades() {
        return atividades;
    }

    public void setAtividades(List<AtividadeInterativa> atividades) {
        this.atividades = atividades;
    }

    public List<HistoricoAtividade> getHistorico() {
        return historico;
    }

    public void setHistorico(List<HistoricoAtividade> historico) {
        this.historico = historico;
    }


    
}
