package br.univille;

public class Pessoa {
    
    private String nome;

    //obrigando a passar o nome
    public Pessoa(String nome) {
        //this referencia a classe
        this.nome = nome;
    }
    //torna opcional passar o nome
    public Pessoa() {

    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    //Sobreescrita de método 
    @Override
    public String toString() {
        return getNome();
    }
}
