package br.univille;
import br.univille.entity.Cidade;
import  br.univille.entity.Pessoa;


public class App {

    public static void main(String[] args) {
        Pessoa mariazinha = new Pessoa("Mariazinha");
        Pessoa zezinho = new Pessoa();
        Cidade jlle = new Cidade();

        zezinho.setNome("Zezinho");
        zezinho.setCidade(jlle);
        jlle.setNome("Joinville");
        jlle.setEstado("Santa Catarina");

        System.out.println(mariazinha);
        System.out.println(zezinho);


    }
}
