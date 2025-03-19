package br.univille.entity;

public class Pokemon {
    private String nome;
    private Pessoa pessoa;

    // Classe imutavel

    public Pessoa getPessoa() {
        return pessoa;
    }

    public void setPessoa(Pessoa pessoa) {
        this.pessoa = pessoa;
    }

    public Pokemon (String nome){
        this.nome = nome;
    }

    public String toString() {
        return this.nome;
    }
}
