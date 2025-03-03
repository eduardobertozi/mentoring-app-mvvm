# Camadas de aplicação

- View: Visualização (html e css).
- Model: Lógica do frontend.
- Service: Chamadas externas (persistência, recursos externos).
- ViewModel: como um Controller, une View + Model + Service.

## Inversão de dependência

- O uso de Injeção e inversão de dependências, facilita a testabilidade.
- Promover desacomplamento melhora a manutenabilidade e escalabilidade.

## O que pode ser testado no nosso exemplo?

- Se os erros de validação aparecem.
- Se a validação funciona e se os erros somem após enviar.
- Se está sendo devolvido feedback error / success.
- Garantir o retorno de sucesso e error conforme o esperado.

## Benefícios de aplicações testáveis

- Os testes são a garantia de funcionamento do software, e são documentação viva
  do sistema construído, evitando que ele regrida.
- Testar aplicação manualmente se torna inviável quando a aplicação escala.
- Teste traz segurança para aplicação.
