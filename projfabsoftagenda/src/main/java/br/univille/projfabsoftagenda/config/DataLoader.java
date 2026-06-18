package br.univille.projfabsoftagenda.config;

import br.univille.projfabsoftagenda.entity.Cuidador;
import br.univille.projfabsoftagenda.repository.CuidadorRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final CuidadorRepository cuidadorRepository;

    public DataLoader(CuidadorRepository cuidadorRepository) {
        this.cuidadorRepository = cuidadorRepository;
    }

    @Override
    public void run(String... args) {
        if (cuidadorRepository.count() == 0) {
            Cuidador cuidador = new Cuidador();
            cuidador.setNome("Admin");
            cuidador.setEmail("admin@admin.com");
            cuidador.setSenha("123456");
            cuidadorRepository.save(cuidador);
        }
    }
}
