package br.univille.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class AlbumFotos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Foto> fotos = new ArrayList<>();

    public void adicionarFoto(Foto foto) {
        fotos.add(foto);
    }

    public void removerFoto(Foto foto) {
        fotos.remove(foto);
    }

    public List<Foto> listarFotos() {
        return fotos;
    }

    public Object getFotos() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getFotos'");
    }

    public void setFotos(Object fotos2) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setFotos'");
    }

    public int getId() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getId'");
    }
}
