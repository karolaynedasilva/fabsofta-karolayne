package br.univille.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Paciente extends Usuario {
    private int idade;

    private String endereco;

    private String numeroEmergencia;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Lembrete> lembretes;

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getNumeroEmergencia() {
        return numeroEmergencia;
    }

    public void setNumeroEmergencia(String numeroEmergencia) {
        this.numeroEmergencia = numeroEmergencia;
    }

    public List<Lembrete> getLembretes() {
        return lembretes;
    }

    public void setLembretes(List<Lembrete> lembretes) {
        this.lembretes = lembretes;
    }
}