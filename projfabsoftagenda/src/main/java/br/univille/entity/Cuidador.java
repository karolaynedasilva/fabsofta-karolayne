package br.univille.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Cuidador extends Usuario {
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Paciente> pacientes;

    public List<Paciente> getPacientes() {
        return pacientes;
    }

    public void setPacientes(List<Paciente> pacientes) {
        this.pacientes = pacientes;
    }
}