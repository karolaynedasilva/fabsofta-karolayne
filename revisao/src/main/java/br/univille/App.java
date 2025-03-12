package br.univille;

public class App {

    public static void main(String[] args) {
        Pessoa mariazinha = new Pessoa("Mariazinha");
        Pessoa zezinho = new Pessoa();
        zezinho.setNome("Zezinho");

        System.out.println(mariazinha);
        System.out.println(zezinho);
    }
}
