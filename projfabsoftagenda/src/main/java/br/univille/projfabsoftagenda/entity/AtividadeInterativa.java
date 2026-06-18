package br.univille.projfabsoftagenda.entity;

import jakarta.persistence.*;

@Entity
public class AtividadeInterativa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String titulo;
    private String tipo;
    private String descricao;

    @ManyToOne
    private Paciente paciente;

    private Boolean confirmado = false;

    public long getId() { return id; }
    public void setId(long id) { this.id = id; }

    public String getTitulo() { return titulo; }
    public void setTitulo(String titulo) { this.titulo = titulo; }

    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }

    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }

    public Paciente getPaciente() { return paciente; }
    public void setPaciente(Paciente paciente) { this.paciente = paciente; }

    public Boolean isConfirmado() { return confirmado != null && confirmado; }
    public void setConfirmado(Boolean confirmado) { this.confirmado = confirmado; }
}