package br.univille.entity;

import java.util.ArrayList;
import java.util.List;

public class AlbumFotos {
    
    private List<Foto> fotos = new ArrayList<>();

    public void adicionarFoto(Foto f) {
        fotos.add(f);
    }

    public void removerFoto(Foto f) {
        fotos.remove(f);
    }

    public List<Foto> listarFotos() {
        return fotos;
    }
}
