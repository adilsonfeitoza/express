# Curso Regex 

### O que é o Regex?

Regex é uma 

- `Target String`: Alvo
- `Pattern`: Expressão regular
- `Regex Engine`: Java, C#, Javascript, PHP, C, Python.
- `Match`: Resultado encontrado

## Começando a trabalhar com Regex

### Aula 001 - Regex para validar CPF

#### Patterns
- `\d` ou `[0-9]`: todos os números / Dígito
- `.`: Qualquer carácter (meta-char)
- `\.`: Ponto 
- `-`: Hífen 
- `{3}`: Quantifier, mostra a quantidade necessaria no carácter anterior

Regex simples para validar CPF:
`\d{3}\.\d{3}\.\d{3}-\d{2}` 


## Aula 002 - Melhorando regex de CPF / Regex data nascimento

#### Patterns
- `?` ou `{0,1}`: Carácter anterior não é obrigatório / aparece zero ou uma vez
- `[..]`: Cria uma classe de carácteres, dentro das classes não existe `meta-char`
- `\s`: classe default para localizar espaços em branco `[ \t\r\n\f]`
- `{1,}` ou `+` : Uma ou varias repetições
- `[a-zç]` ou `+` : Letras minúsculas de a até z e `ç`
- `w` ou `+` : wordchar `[A-Za-z0-9]`

#### Quantifiers
- `?` : zero ou uma vez
- `+` : uma ou mais vezes
- `*` : zero ou mais vezes
- `{n}` : exatamente n vezes
- `{n,}` : no mínimo n vezes
- `{n,m}` : no mínimo n vezes, no máximo m vezes.

#### Classes de char - []
- `[A-Z]` : letar de A até Z
- `[123]` : 123

Regex cpf melhorada:
`[0-9]{3}\.?\d{3}\.?\d{3}[-.]?\d{2}` 

Regex validar celular:
`\(?[1-9]{2}\)?\s?[6-9]{1}[0-9]{3,4}-?[0-9]{4,}` 

## Aula 003 - Âncoras em empressões regulares

#### Classes de char - [ ]
- `[A-Z]` : letras de A até Z (maiúsculas)
- `[123]` : 123
- `[A-Za-z0-9_]` : word char, ou mais curto `w`

#### Âncoras
- `\b` : word boundary / limitador de texto / antes de depois do carácter procurado não pode conter um `word char - [A-Za-z0-9_]`
- `^` : início do alvo`
- `$` : fim do alvo`


## Aula 004 - Grupos

#### Grupo
- `( )` : expressões regulares dentro de parentese são chamados de `grupo`, e é retornado na regex como um novo grupo além do principal
- `(?:)` : Non:capturing group / informa que o grupo não deve ser retornado pela regex / não faz parte do resultado
- `(\w+)` : grupo de word chars
- `(\w+)?` : grupo opcional
- `(?:\w+)` : non-capturing group

## Aula 005 - Greedy/Ganancioso

#### Greedy
- `<h1.+?>` : para na primeira ocorrência `>` encontrada

#### Ou
- `(h1|h2)` : localiza h1 ou h2

#### BackReferences
- `\n` : utiliza a mesma regra do `grupo` n já criado

    Todos os grupos da regex fazem parte de um array e podem ser reutilizados com `\n` onde `n` é o número do grupo, contando a partir do 1. `<(h1|h2).+?>([\wõ\s]+)</\1>`

#### Exemplo
    Localizando textos dentro de uma Tag HTML

- `Target String`: < h1 class="text-left">Expressões regulares</ h1>
- `Pattern`: < h1.+?>([\wõ\s]+)</ h1>
- `Match`: < h1 class="text-left">Expressões regulares</ h1> ||| Expressões regulares

## Aula 006 - Alguns Exemplos

#### Exemplo 1

[arquivo de exemplo](A006/sample/index.html).

- `Alvo`: 11a22b33c
- `Regex`: (\d\d)(\w)