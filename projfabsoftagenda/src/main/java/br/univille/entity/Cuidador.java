package br.univille.entity;

import java.util.List;

public class Cuidador extends Usuario {
    private List<Paciente> pacientes;

    public List<Paciente> getPacientes() {
        return pacientes;
    }

    public void setPacientes(List<Paciente> pacientes) {
        this.pacientes = pacientes;
    }
}