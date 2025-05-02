package br.univille.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class HistoricoAtividade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private LocalDate data;
    private String descricao;
    private boolean foiRealizada;
    public LocalDate getData() {
        return data;
    }
    public void setData(LocalDate data) {
        this.data = data;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public boolean isFoiRealizada() {
        return foiRealizada;
    }
    public void setFoiRealizada(boolean foiRealizada) {
        this.foiRealizada = foiRealizada;
    }

    
}

