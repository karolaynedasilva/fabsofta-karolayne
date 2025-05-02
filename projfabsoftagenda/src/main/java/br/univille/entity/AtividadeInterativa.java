package br.univille.entity;

public class AtividadeInterativa {
    private long id;
    private TipoAtividade tipo; // Exemplo: "Jogo", "Exercício de memória"
    private String descricao;

    public TipoAtividade getTipo() {
        return tipo;
    }

    public void setTipo(TipoAtividade tipo) {
        this.tipo = tipo;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}