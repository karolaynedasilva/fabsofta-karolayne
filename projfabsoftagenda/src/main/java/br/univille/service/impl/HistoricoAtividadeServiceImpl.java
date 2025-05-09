package br.univille.service.impl;

import br.univille.entity.HistoricoAtividade;
import br.univille.repository.HistoricoAtividadeRepository;
import br.univille.service.HistoricoAtividadeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HistoricoAtividadeServiceImpl implements HistoricoAtividadeService {

    @Autowired
    private HistoricoAtividadeRepository repository;

    @Override
    public List<HistoricoAtividade> listarTodas() {
        return repository.findAll();
    }

    @Override
    public Optional<HistoricoAtividade> buscarPorId(Long id) {
        return repository.findById(id);
    }

    @Override
    public HistoricoAtividade salvar(HistoricoAtividade atividade) {
        return repository.save(atividade);
    }

    @Override
    public void deletar(Long id) {
        repository.deleteById(id);
    }
}
