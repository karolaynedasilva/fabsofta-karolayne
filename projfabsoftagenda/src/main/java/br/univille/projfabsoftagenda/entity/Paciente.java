package br.univille.projfabsoftagenda.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Paciente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    private String nome;
    private String email;
    private String senha;
    private String telefone;
    
    @OneToOne(cascade = CascadeType.ALL)
    private AlbumFotos album;

    @Enumerated(EnumType.STRING)
    private EstadoEmocional estadoEmocionalAtual;

    @OneToMany(cascade = CascadeType.ALL)
    private List<AtividadeInterativa> atividades;

    @OneToMany(cascade = CascadeType.ALL)
    private List<HistoricoAtividade> historico;

  
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

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
