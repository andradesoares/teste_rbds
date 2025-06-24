Teste React / Next.js - RBDS
Este teste foi criado com o intuito de entender o nível técnico dos candidatos à vaga de Desenvolvedor Front-End Pleno e será utilizado nos critérios de avaliação dos mesmos.

Sua Tarefa
O desenvolvedor deve criar, utilizando React, um fluxo de autenticação simples. O uso de bibliotecas plug and play para autenticação não será permitido, portanto, o candidato deve criar o fluxo manualmente, utilizando seus próprios conhecimentos e experiência.

Sobre a API para Auth
A URL que deve ser utilizada para desenvolver o fluxo de login: https://1q8k0qzkxe.execute-api.us-east-1.amazonaws.com/dev/auth/login

Exemplo de Request Payload (JSON):

{
  "email": "...",
  "password": "..."
}
Exemplo de Resposta (Success):

{
  "success": true,
  "data": {
    "id": "clpu61dvn0000umkgbav276ez",
    "email": "teste-dev@rbds.org.br",
    "fullname": "Conta Teste Dev",
    "active": true,
    "role": "STAFF",
    "account": {
      "jwt": "..."
    }
  }
}
Para obter os dados do usuário, utilize a seguinte URL: https://1q8k0qzkxe.execute-api.us-east-1.amazonaws.com/dev/users/{user_id}

Requisitos
Seu fluxo de autenticação deve permitir usuários ativos e negar usuários desativados.
Deve ser possível fazer logout.
O JWT retornado deve persistir de alguma forma, mantendo o usuário logado caso ele atualize a página.
Deve ser possível utilizar os dados/campos do usuário de forma global, ou seja, tanto dentro dos componentes React quanto fora.
UI/UX simples e clean utilizando TailwindCSS.
Utilizar React Query / Tanstack Query.
Código limpo e organizado.
Caso seja identificado o uso de AI, o candidato será desqualificado imediatamente.
Prazo
2 dias a partir do momento que o candidato avisar sobre o start do teste (via WhatsApp ou email).

Como envio meu código para avaliação?
Basta subir o código no GitHub e enviar o link por email para jean@rbds.org.br

Boa sorte!