package br.univille.projfabsoftagenda.controller;

public class FotoFamiliarDTO {

    private String foto;
    private String arquivoFoto;
    private String mimeType;
    private PacienteRef paciente;

    public String getFoto() { return foto; }
    public void setFoto(String foto) { this.foto = foto; }

    public String getArquivoFoto() { return arquivoFoto; }
    public void setArquivoFoto(String arquivoFoto) { this.arquivoFoto = arquivoFoto; }

    public String getMimeType() { return mimeType; }
    public void setMimeType(String mimeType) { this.mimeType = mimeType; }

    public PacienteRef getPaciente() { return paciente; }
    public void setPaciente(PacienteRef paciente) { this.paciente = paciente; }

    public static class PacienteRef {
        private Long id;
        public Long getId() { return id; }
        public void setId(Long id) { this.id = id; }
    }
}
