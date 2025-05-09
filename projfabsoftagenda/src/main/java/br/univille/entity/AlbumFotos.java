package br.univille.entity;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class AlbumFotos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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

    public List<Foto> getFotos() {
        return fotos;
    }

    public void setFotos(List<Foto> fotos) {
        this.fotos = fotos;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
