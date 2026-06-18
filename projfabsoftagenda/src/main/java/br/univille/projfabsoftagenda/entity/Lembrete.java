package br.univille.projfabsoftagenda.entity;

import jakarta.persistence.*;

@Entity
public class Lembrete {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String titulo;
    private String descricao;
    private String data;
    private String hora;

    @ManyToOne
    private Paciente paciente;

    private Boolean confirmado = false;

    public long getId() { return id; }
    public void setId(long id) { this.id = id; }

    public String getTitulo() { return titulo; }
    public void setTitulo(String titulo) { this.titulo = titulo; }

    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }

    public String getData() { return data; }
    public void setData(String data) { this.data = data; }

    public String getHora() { return hora; }
    public void setHora(String hora) { this.hora = hora; }

    public Paciente getPaciente() { return paciente; }
    public void setPaciente(Paciente paciente) { this.paciente = paciente; }

    public Boolean isConfirmado() { return confirmado != null && confirmado; }
    public void setConfirmado(Boolean confirmado) { this.confirmado = confirmado; }
}