package br.univille;
import br.univille.entity.Cidade;
import  br.univille.entity.Pessoa;
import br.univille.entity.Pokemon;


public class App {

    public static void main(String[] args) {
        Pessoa mariazinha = new Pessoa("Mariazinha");
        Pessoa zezinho = new Pessoa();
        Cidade jlle = new Cidade();
        Pokemon picachu = new Pokemon("Picachu");
        Pokemon porygon = new Pokemon("Porygon");

        zezinho.setNome("Zezinho");
        zezinho.setCidade(jlle);
        jlle.setNome("Joinville");
        jlle.setEstado("Santa Catarina");
        zezinho.getPokemons().add(picachu);
        zezinho.getPokemons().add(porygon);

        for(var umPokemon : zezinho.getPokemons()){
            System.out.println(umPokemon);
        }

        System.out.println(mariazinha);
        System.out.println(zezinho);



    }
}
