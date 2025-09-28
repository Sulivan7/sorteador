# 🎲 Sorteador

Um projeto simples para sortear números aleatórios diretamente no navegador.
Feito com **HTML, JavaScript** e estilizado com **Less**, utilizando **Grunt** para automatizar tarefas como compilação, minificação e substituição de caminhos.

---

## 🚀 Demonstração

- Link do projeto online: https://sorteador-smoky-nine.vercel.app/

---

## 🛠️ Tecnologias utilizadas

- **HTML5** para a estrutura da página
- **JavaScript** para a lógica do sorteio
- **Less** para estilos dinâmicos e reutilizáveis
- **Grunt** para:

  - Compilar Less para CSS
  - Minificar HTML e JS
  - Substituir caminhos para ambientes de dev e produção
  - Automatizar o build completo do projeto

---

## ⚙️ Como executar o projeto

### Passos para rodar localmente

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Para ambiente de desenvolvimento (com watch):

   ```bash
   npm run grunt
   ```

   Isso compila o Less, copia os arquivos para `dev/` e fica monitorando mudanças.

3. Para gerar a versão final de produção:

   ```bash
   npm run build
   ```

   Os arquivos finais ficarão na pasta `dist/`.

4. Abra o arquivo `dev/index.html` (dev) ou `dist/index.html` (produção) no navegador.

---

## 📖 Como usar

1. Informe o **número máximo** no campo de entrada.
2. Clique em **"Sortear número"**.
3. O número sorteado será exibido na tela.

---
