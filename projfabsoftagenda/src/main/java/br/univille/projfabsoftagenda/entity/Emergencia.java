package br.univille.projfabsoftagenda.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import java.time.LocalDateTime;

@Entity
public class Emergencia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    private Paciente paciente;

    private LocalDateTime horario;

    @Enumerated(EnumType.STRING)
    private StatusEmergencia status;

    public Emergencia() {
        this.horario = LocalDateTime.now();
        this.status = StatusEmergencia.PENDENTE;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Paciente getPaciente() {
        return paciente;
    }

    public void setPaciente(Paciente paciente) {
        this.paciente = paciente;
    }

    public LocalDateTime getHorario() {
        return horario;
    }

    public void setHorario(LocalDateTime horario) {
        this.horario = horario;
    }

    public StatusEmergencia getStatus() {
        return status;
    }

    public void setStatus(StatusEmergencia status) {
        this.status = status;
    }
}