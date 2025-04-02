package br.univille.entity;

public class EstadoEmocional {
    private long id;
    private String humor; // Exemplo: "Feliz", "Triste", "Ansioso"

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getHumor() {
        return humor;
    }

    public void setHumor(String humor) {
        this.humor = humor;
    }
}