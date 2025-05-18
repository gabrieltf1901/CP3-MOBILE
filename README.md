# LINK DO VÍDEO DE APRESENTAÇÃO ----> https://youtu.be/I8k6io4ri6E
### GABRIEL TORRES FERNANDES - RM553635


# APP-GESTAO-PRODUTOS

Aplicativo móvel para gerenciamento de estoque, desenvolvido em React Native com Expo Router e Context API. Permite cadastrar, listar, editar e excluir produtos, além de escanear códigos de barras usando a câmera do dispositivo.

## Funcionalidades

* **Listagem de Produtos**: exibe todos os itens cadastrados.
* **Cadastro de Produto**:

  * Nome
  * Data de fabricação
  * Prazo de validade
  * Quantidade
  * Lote (letras e números)
  * Estado de origem (Picker com todas as UFs)
  * Código de barras (digitável ou escaneável)
* **Edição de Produto**: modifica todos os campos acima.
* **Exclusão de Produto**.
* **Leitura de Código de Barras**: usa expo-camera para escanear e preencher automaticamente o campo.
* **Tela do Desenvolvedor**: exibe o nome do autor.

## Estrutura de Pastas

```bash
app/
├── _layout.js          # Configuração de navegação com Expo Router
├── index.js            # Tela de listagem
├── cadastro.js         # Tela de cadastro
├── editar.js           # Tela de edição
├── scanner.js          # Rota para o leitor de código de barras
└── desenvolvedor.js    # Tela com informações do desenvolvedor

contexts/
├── ProductsContext.js  # Gerencia estado de produtos (CRUD em memória)
└── BarcodeContext.js   # Guarda valor do último código escaneado

assets/
├── icone-app.png       # Ícone do aplicativo
└── splash.png          # Imagem de splash screen

*.json, *.js            # Configurações de Expo, Babel e código-fonte
```

## Pré-requisitos

* Node.js (versão LTS)
* npm ou yarn
* Expo CLI (`npm install -g expo-cli`)

## Instalação e Execução

1. Clone o repositório e navegue até a pasta:

   ```bash
   git clone https://github.com/SEU_USUARIO/app-gestao-produtos.git
   cd app-gestao-produtos
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npx expo start
   ```

4. Teste no dispositivo ou emulador:

   * **Dispositivo físico**: abra o app Expo Go e escaneie o QR Code.
   * **Emulador Android**: pressione **a** no terminal do Metro Bundler.
   * **Web**: pressione **w** para abrir no navegador.

## Observações

* Não é necessário gerar builds nativos durante o desenvolvimento.
* Para futura persistência, pode-se integrar AsyncStorage ou banco local.

---

Aproveite e faça ajustes conforme necessário para o seu workflow.
