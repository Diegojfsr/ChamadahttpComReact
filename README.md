# ChamadahttpComReact
Fazer uma chamada http simples e implementar estados de loading e erro.

### Passo 1: Instalar o Vite
Primeiro, você precisa ter o Node.js instalado. Depois, abra o terminal e execute o seguinte comando para criar um novo projeto Vite:  
``` npm create vite@latest my-react-ts-app --template react-ts ```

### Passo 2: Navegar até o diretório do projeto
Depois que o projeto for criado, navegue até o diretório do projeto:  
``` cd my-react-ts-app ```

### Passo 3: Instalar as dependências
Instale as dependências do projeto executando o comando:  
``` npm install ``` 

### Passo 4: Executar o servidor de desenvolvimento
Para iniciar o servidor de desenvolvimento, execute o comando:  
``` npm run dev ```

### Passo 5: Estrutura do Projeto
A estrutura do projeto será semelhante a esta:
```
my-react-ts-app/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### Passo 6: Criar Componentes
Vamos criar um componente simples para exibir os dados de uma chamada HTTP. Crie um arquivo chamado DataFetcher.tsx dentro da pasta src/components:
```
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
```

### Passo 7: Usar o Componente no App
Agora, importe e use o componente DataFetcher no arquivo App.tsx:
```
import React from 'react';
import DataFetcher from './components/DataFetcher';

const App: React.FC = () => {
  return (
    <div>
      <h1>My React TypeScript App</h1>
      <DataFetcher />
    </div>
  );
};

export default App;
```

### Passo 8: Importação do módulo "axios"
Importação e instalação do módulo "axios" no arquivo DataFetcher.tsx.  
``` npm install axios ```

### Passo 9: Executar o Projeto
Certifique-se de que o servidor de desenvolvimento esteja em execução (npm run dev) e abra o navegador no endereço fornecido (geralmente http://localhost:3000). Você verá o título "My React TypeScript App" e os dados carregados da API.

