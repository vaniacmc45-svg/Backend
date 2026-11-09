//1. importamos os módulos necessários
const express = require('express');
const cors = require('cors'); // o módulo que permite a conexão externa segura
const  app = express();

// 2. Configurações de intermediários (Midllewares)
app.use(cors())      // liberamos o servidor para receber requisições de outros locais (como nosso HTML)
app.use(express,express.json());  // Ensinamos o Express a ler dados enviados em formato JSON
// Nosso "Banco de dados" fictício armazenado na memória RAM
const usuarios = [
    {nome: "Ana Costa", cargo: "Desenvolvedora" },
    {nome: " Carlos Sousa", cargo: "Designer" } 
];
  
// ROTA GET: Envia a lista atual de usuários para quem solicitar
app.get('/usuarios', function (requisicao, resposta) {
    return resposta.json(usuarios);});
// ROTA POST: recebe novos dados do frontend e insere na nossa lista
app.post('/usuarios', function (requisicao,resposta) {
    const dadosRecebidos = requisicao.body; // Pega o que o usuário preeencheu no formulário
    // Monta o novo objeto de usuário com o ID automático incrental
    const novoUsuario = {
        nome: dadosRecebidos.nome,
        cargo: dadosRecebidos.cargo  }
    usuarios.push(novoUsuarios); // adiciona na lista/banco
    // Devolve o status 201 (Criado) e o objeto do usuário que acabou de ser saalvo
    return resposta.status(201).json(novoUsuario);
});
// Inicialização do servidor na porta 3000
const PORTA = 8000;
app.listen(PORTA,function () {
    console.log(`🚀 backend rodando em http://localhost:${PORTA}`);
});


