# Fábrica de Software 2025/1

## Nome da Equipe 

- Karolayne da Silva Alexandre

## Proposta do projeto 

Um sistema de agenda e lembretes com objetivo de ajudar pessoas com Alzheimer a manterem sua rotina organizada, garantindo que não esqueçam compromissos importantes e tarefas diárias.O sistema enviará alertas diários informando sobre as atividades, como tomar medicamentos, se alimentar, ou até mesmo lembrar de compromissos com médicos. 

- Sistema de orientação e lembretes para auxiliar pessoas com Alzheimer
    - Cadastro de Usuários e Cuidadores 
    - Registro de usuários (paciente e/ou cuidador). 
        - Cuidadores poderão organizar as tarefas diárias dos pacientes. 
        - Cuidadores poderão acompanhar o histórico e progresso do paciente. 
        - Pacientes receberão os lembretes configurados pelos cuidadores.
    - Agenda de Lembretes
    - Cadastro de compromissos diários (atividades, consultas, remédios)
    - Exibição de lembretes de formal visual (levando em conta a acessibilidade, tipografia com tamanho adequado e contraste da cor da fonte e o background)
    - Histórico de atividades para verificar o progresso. 
    - Registro de emoções - através de um termômetro de humor
    - Espaço para fotografias familiares
    - Telas com interações. Atividades de estimulação de diversas funções cognitivas
    - Botões de comunicação simples: Desenvolver uma interface onde o usuário pode clicar em ícones ou imagens que representem ações ou necessidades. Por exemplo: "Eu quero ir ao banheiro", "Estou com fome", "Preciso de ajuda".
    
 ## Livro Eng Software Moderna
[Eng. Soft Moderna - Requisitos](https://engsoftmoderna.info/cap3.html)

## Histórias de Usuário   

- Como Cuidador, quero cadastrar pacientes sob minha responsabilidade, para que eu possa acompanhar suas atividades e evolução.

- Como Cuidador, quero visualizar a lista de pacientes atribuídos a mim, para gerenciar suas atividades e monitorar seu progresso.

- Como Cuidador, quero acessar o álbum de fotos do paciente, para ajudá-lo a relembrar momentos e estimular a memória afetiva.

- Como Cuidador, quero agendar lembretes para meus pacientes, para garantir que eles realizem tarefas importantes no horário certo.

- Como Paciente, quero visualizar meu álbum de fotos com descrições, para relembrar momentos importantes da minha vida e melhorar minha memória.

- Como Paciente, quero adicionar ou remover fotos do meu álbum, para manter minhas memórias organizadas e atualizadas.

- Como Paciente, quero realizar atividades interativas como jogos e exercícios de memória, para estimular minha cognição de forma divertida.

- Como Paciente, quero acompanhar meu histórico de atividades realizadas, para ver meu progresso ao longo do tempo.

- Como Paciente, quero registrar meu estado emocional atual, para que meu cuidador saiba como estou me sentindo.

- Como Paciente, quero receber lembretes de atividades ou tarefas importantes, para não me esquecer de compromissos essenciais.

- Como Administrador, quero cadastrar cuidadores no sistema, para que eles possam acompanhar pacientes.

- Como Administrador, quero manter um registro das atividades e seus tipos, para garantir que os pacientes tenham variedade e estímulo adequado.

- Como Desenvolvedor, quero garantir que ao remover um paciente, também sejam removidas suas atividades, histórico e álbum de fotos associados, para manter a integridade dos dados.

- Como Desenvolvedor, quero aplicar CascadeType.ALL onde necessário, para facilitar a persistência e remoção de objetos relacionados no banco de dados.


# Design Patterns

https://refactoring.guru/design-patterns

# Diagrama de classes

![alt text](image-1.png)