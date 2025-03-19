package br.univille.entity;

import java.util.List;

public class Cidade {
    private long id;
    private String nome;
    private String estado;
    private List<Pessoa> pessoas;

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

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }


}
