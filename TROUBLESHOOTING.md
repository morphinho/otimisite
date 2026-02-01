# Troubleshooting - Tela Branca

## Possíveis Causas e Soluções

### 1. Erro de JavaScript no Console
- Abra o DevTools (F12)
- Verifique a aba Console para erros
- Erros comuns:
  - Module not found
  - Syntax errors
  - Hydration errors

### 2. CSS não está carregando
- Verifique se `app/globals.css` existe
- Verifique se Tailwind está configurado
- Tente limpar cache: `rm -rf .next`

### 3. Problema com AdSense
- O componente AdSense pode estar causando erro
- Tente comentar temporariamente o AdSense no Sidebar
- Verifique se o script do AdSense está bloqueado

### 4. Cache do Next.js
- Limpe o cache: `rm -rf .next`
- Reinstale dependências: `rm -rf node_modules && npm install`
- Rebuild: `npm run build`

### 5. Verificar se o servidor está rodando
- Execute: `npm run dev`
- Acesse: `http://localhost:3000`
- Verifique se há erros no terminal

## Comandos Úteis

```bash
# Limpar cache e rebuild
rm -rf .next
npm run build

# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install

# Verificar erros de TypeScript
npx tsc --noEmit

# Verificar erros de lint
npm run lint
```

## Teste Básico

Se a tela ainda estiver branca, teste com uma página simples:

1. Crie `app/test/page.tsx`:
```tsx
export default function Test() {
  return <h1>Test Page</h1>
}
```

2. Acesse `http://localhost:3000/test`

Se isso funcionar, o problema está em outro componente.

