package br.univille.entity;

public class Pessoa {
    private long id;
    private String nome;
    private String endereco;
    private Cidade cidade;

    //obrigando a passar o nome
    public Pessoa(String nome) {
        //this referencia a classe
        this.nome = nome;
    }
    //torna opcional passar o nome
    public Pessoa() {

    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
    public String getNome() {
        return nome;
    }

    public Cidade getCidade() {
        return cidade;
    }

    public void setCidade(Cidade cidade) {
        this.cidade = cidade;
    }

    //Sobreescrita de método 
    @Override
    public String toString() {
        return getNome();
    }
    
}
