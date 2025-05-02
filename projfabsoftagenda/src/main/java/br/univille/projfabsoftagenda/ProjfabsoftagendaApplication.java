package br.univille.projfabsoftagenda;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "br.univille.entity")

public class ProjfabsoftagendaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjfabsoftagendaApplication.class, args);
	}

}
