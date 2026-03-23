# 🧮 Simulador de Holerite Digital 2026

Projeto desenvolvido para calcular o salário líquido com base nas projeções tributárias de 2026. O foco do exercício é a aplicação de lógica de programação para cálculos progressivos e a criação de uma interface profissional seguindo diretrizes de UI específicas.

> Curso Gestão da Tecnologia da Informação - Fatec Itu
Elaborado por: Ana Caroline Campopiano - 4º semestre

# 🚀 Funcionalidades e Regras de Negócio

1. Cálculo de INSS Progressivo (2026)

O sistema aplica alíquotas automáticas por faixas de salário:
7,5% até R$ 1.621,00
9,0% até R$ 2.902,84
12,0% até R$ 4.354,27
14,0% acima de R$ 4.354,28 (Limitado ao teto de *R$ 988,09*)

2. Cálculo de IRRF (Imposto de Renda)

Isenção: Aplicada para bases de cálculo (Salário Bruto - INSS) de até R$ 5.000,00.
Tributação: 27,5% sobre o valor que exceder o limite de isenção.

# 🎨 Interface (UI/UX)

Layout centralizado com Flexbox.
Paleta de cores em tons de azul profissional.
Campos de saída (INSS e IRRF) com estilo readonly e bordas pontilhadas (dashed).
Feedback visual para usuários isentos de imposto.


## 🚀 Tecnologias Utilizadas
- HTML5
- CSS3
- Javascript (Vanilla JS)

## Demonstração online
Acesse https://github.com/carol-campopiano/CalculadoraHolerite.git

## Licença
A licença deste software é **MIT**