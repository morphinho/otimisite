# Como Rodar o Projeto Localmente

## Passo a Passo

### 1. Instalar Dependências
```bash
npm install
```

### 2. Rodar em Modo Desenvolvimento
```bash
npm run dev
```

O servidor vai iniciar em: **http://localhost:3000**

Abra esse endereço no seu navegador para ver o blog funcionando.

### 3. Parar o Servidor
Pressione `Ctrl + C` no terminal para parar o servidor.

## Outros Comandos Úteis

### Build para Produção
```bash
npm run build
```
Gera os arquivos estáticos otimizados na pasta `.next/`

### Rodar Build de Produção
```bash
npm run build
npm start
```
Roda a versão de produção localmente (útil para testar antes de fazer deploy)

### Verificar Erros de Código
```bash
npm run lint
```

## Estrutura de URLs

Depois de rodar `npm run dev`, você pode acessar:

- **Home**: http://localhost:3000
- **Blog**: http://localhost:3000/blog
- **Post 1**: http://localhost:3000/blog/post-1
- **Post 2**: http://localhost:3000/blog/post-2
- **Post 3**: http://localhost:3000/blog/post-3
- **Sobre**: http://localhost:3000/about

## Observações

⚠️ **Imagens**: As imagens dos posts ainda não existem. Você verá placeholders cinzas. Para adicionar:
1. Coloque as imagens em `public/images/`
2. Nomeie como: `post-1.jpg`, `post-2.jpg`, `post-3.jpg`

⚠️ **AdSense**: Os anúncios não vão funcionar até você configurar seu Publisher ID em `components/AdSense.tsx`

## Solução de Problemas

### Porta 3000 já está em uso?
O Next.js vai tentar usar a próxima porta disponível (3001, 3002, etc.)

### Erro ao instalar dependências?
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Erros de TypeScript?
Verifique se todas as dependências foram instaladas corretamente:
```bash
npm install
```

