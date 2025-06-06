package br.univille.projfabsoftagenda.service.impl;

import br.univille.projfabsoftagenda.entity.AtividadeInterativa;
import br.univille.projfabsoftagenda.repository.AtividadeInterativaRepository;
import br.univille.projfabsoftagenda.service.AtividadeInterativaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AtividadeInterativaServiceImpl implements AtividadeInterativaService {

    @Autowired
    private AtividadeInterativaRepository repository;

    @Override
    public List<AtividadeInterativa> listarTodos() {
        return repository.findAll();
    }

    @Override
    public Optional<AtividadeInterativa> buscarPorId(Long id) {
        return repository.findById(id);
    }

    @Override
    public AtividadeInterativa salvar(AtividadeInterativa atividade) {
        return repository.save(atividade);
    }

    @Override
    public void deletar(Long id) {
        repository.deleteById(id);
    }
}
