# Sistema de gestão de processos de manutenção de veículos

Este é um sistema simples para gestão de processos, se tratando de serviços de manutenção de veículos.

## Instruções de como executar a aplicação

### Com Docker
- A aplicação conta com um arquivo Dockerfile para realizar o build e um arquivo docker-compose para gerir as aplicações.
- Utilize o comando `docker-compose up`, aguarde a finalização e acesse em http://localhost:3000.

### Sem Docker
- Instale as dependências com o comando `npm install`.
- Após a instalação, execute a aplicação com o comando `npm start`.

## Instruções gerais para teste

### Leitura de clientes
- Em `./utils/` existe um arquivo de imagem contendo um código já cadastrado, basta apontar o leitor para o mesmo.
- A aplicação conta com a seguinte estrutura JSON presente no código QR:
```json
{
    "id": 1,
    "name": "Ana Clara",
    "email": "anaclara@contato.com",
    "phone": "XX999999999",
    "vehicles": [
        {
            "brand": "Ford",
            "model": "Fusion",
            "year": "2019",
            "license": "MMM-111"
        },
        {
            "brand": "Fiat",
            "model": "Palio",
            "year": "2013",
            "license": "RRR-222"
        }
    ],
    "services": [
        1,
        2,
        3
    ]
}
```

### Funcionalidades
- É possível fazer a leitura do QRcode do cliente para trazer suas informações.
- É possível cadastrar um novo serviço para o cliente.
- É possível imprimir uma oferta de prestação de serviços.
- É possível fazer consultas de serviços cadastrados.
- É possível filtrar os serviços pelos profissionais responsáveis.