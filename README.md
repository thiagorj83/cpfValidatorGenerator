# cpfValidatorGenerator
  Aplicativo escrito em React Native validador/gerador de números de C.P.F. .

## Introdução

  CpfValidatorGenerator é um pequeno projeto de aplicativo escrito em React Native que escrevi com o objetivo de praticar a criação de aplicativos em React Native e demonstrar como funciona o algoritmo de validação de um número de cadastro de pessoa física, nosso número de identificação brasileiro conhecido como c.p.f. .
Ferramentas utilizadas
  Para este projeto, desenvolvido no Windows 11,é necessário visitar a página https://reactnavigation.org/docs/getting-started/ onde há a descrição de como instalar e utilizar a biblioteca react-navigation, necessária para criar o menu de navegação do aplicativo.
#### Pré-requisitos
•	react-native >= 0.63.0.

## Instalação

  Para exemplificar a criação da pasta de projeto, utilizarei o nome “app-react-native”.
No prompt de comando ou no Windows powershell, digite:

* C:\> react-native init app-react-native    

  Com este comando, a pasta do projeto será criada com a maior parte dos arquivos necessário ao desenvolvimento do aplicativo.
Após isso, é necessário instalar os pacotes requeridos no projeto, via NPM ou YARN, conforme indicado pela página react navigation. 

* C:\> npm install @react-navigation/native     

  Após isso, instale também:     

* C:\>  npm install react-native-screens react-native-safe-area-context      

Neste projeto, o tipo de navegação/menu escolhido foi o 'tab navigation', que oferece a navegação por abas dipostas na parte inferior da tela. Para tal, instale as duas bibliotecas abaixo:      

* C:\>  @react-navigation/bottom-tabs       
* C:\>  react-native-vector-icons/Ionicons	       

  O pacote react-native-screens package requer uma configuração adicional para funcionar apropriadamente em dispositivos Android.Abra e edite o arquivo ‘MainActivity.java, localizado na pasta android/app/src/main/java/app-react-native/MainActivity.java.

  Adicione o seguinte trecho de código ao corpo da classe MainActivity:

      @Override
      protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null);
      }

  Por fim, adicione o seguinte import ao arquivo:

* import android.os.Bundle;      

## O algoritmo de validação do número de C.P.F. 

  A classe cpfValidator possui duas funções: allAreEqual() e isValid().

### A função isValid() . 

    isValid(cpf) {

        this.cpf = cpf
        let chars = []
        let finalArray = []
        if (cpf.length === 11) {
            chars = cpf.split('')
            chars.forEach((item, index, arr) => {
                if (!isNaN(parseInt(item))) {
                    finalArray.push(item)
                }
            });

  A função isValid separa verifica a quantidade de caracteres através da função .length(). Se possuir onze caracteres, a função cria um array com cada caracter, evetua o parseInt() e verifica se o resultado não é um NaN (not a number). Se cada caracter for um número, é provável que o usuário forneceu um número de ***C.P.F.*** completo, sem os separadores pontos e traços.A função ‘finalArray’ recebe os inteiros.
Após isso, a função ***areAllEqual()*** verifica se o conjunto de onze dígitos não são todos iguais entre si. Caso não sejam, a execução prossegue, senão, retorna ***‘false’***.
Por outro lado, é possível que o usuário tenha digitado o número com pontos e traço.


    else if ((cpf.length === 14) && (cpf.match("^\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}$"))) {
                chars = this.cpf.split('')
                chars.forEach((item, index, arr) => {
                    if (!isNaN(parseInt(item))) {
                        finalArray.push(item)
                    }
                });
            }

  Dessa forma, a função verifica, através de uma máscara com expressão regular se o que foi fornecido atende ao formato de um número de C.P.F, que é xxx.xxx.xxx-xx, ou seja, são onze dígitos. Três grupos de três dígitos separados por ponto, mais os dois últimos dígitos (dígitos verificadores) separados por traço. Neste caso, a expressão regular extrai apenas os dígitos, coloca cada caracter na array “chars”, efetua o parseInt() de cada um mais a verificação se cada um deles não é um NaN. Caso todos os onze dígitos sejam inteiros, eles são salvos na variável ‘finalArray’ e passe-se para o próximo passo.
##Função areAllEqual

  O próximo passo é efetuar a execução da função areAllEqual(). Ela verifica se se todos os dígitos são iguais. O grupo ‘111.111.111.11’ ou ‘888.888.888-88’ atenderia o cálculo final que determina se dado número é um C.P.F. válido. Porém, não existem documentos desse tipo contendo todos os dígitos iguais. Logo, exclui-se essas ocorrências.
   
   allAreEqual(array) {
        this.array = array
        const result = array.every(element => {
            if (element === array[0]) {
                return true;
            }
        });

        return result;
    }

### Cálculo dos dígitos verificadores	

  Agora, partindo do ponto em que há onze caracteres na variável *‘finalArray’* que se forem convertidos para o tipo int são numéricos, a variável *‘invalid’*
possui o valor *‘false’*. Isso permite o próximo passo que é a verificação dos dígitos verificadores. 
  Para a verificação do primeiro dígito verificador, efetua-se a criação da variável *‘aux_array1’* com os valores **[10,9,8,7,6,5,4,3,2]**. 

  Multiplica-se cada um dos nove primeiros números contidos em 'finalArray’ pelos contidos em ***‘aux_array1’***, na ordem de ocorrência, ou seja, 
*‘finalArray[0]* *** *aux_array1[0]’*, *‘finalArray[1]* *** *aux_array1[1]’*, e assim por diante, somando todos os produtos. A variável *‘sum1’* recebe a soma.
Para efeito didático, utilizaremos o seguinte número fictício **371.476.261-25**.


| 10 | 9  | 8 | 7  | 6  | 5  | 4 | 3  | 2 |
|----|----|---|----|----|----|---|----|---|
| *  | *  | * | *  | *  | *  | * | *  | * |
| 3  | 7  | 1 | 4  | 7  | 6  | 2 | 6  | 1 |
| =  | =  | = | =  | =  | =  | = | =  | = |
| 30 | 63 | 8 | 28 | 42 | 30 | 8 | 18 | 2 |

  A variável ***‘expected_digit1’*** representará o valor esperado para o primeiro dígito verificador do suposto **C.P.F.** . Seu cálculo se dá por:

***30+63+8+28+42+30+8+18+2=229***

***‘expected_digit1’=229 *10 mod 11***

***‘expected_digit1’= 2***


  Para o cálculo do segundo dígito verificador, procede-se da seguinte maneira:

| 11 | 10 | 9  | 8  | 7  | 6  | 5  | 4  | 3  | 2 |
|----|----|----|--- |----|----|----|--- |----|---|
| *  | *  | *  | *  | *  | *  | *  | *  | *  | * |
| 3  | 7  | 1  | 4  | 7  | 6  | 2  | 6  | 1  | 2 |
| =  | =  | =  | =  | =  | =  | =  | =  | =  | = |
| 33 | 70 | 9  | 32 | 49 | 36 | 10 | 24 | 3  | 4 |

***‘expected_digit2’=(33+70+9+32+49+36+10+24+3+4) * 10 mod 11***
***‘expected_digit2’ =270 * 10 mod 11***
***‘expected_digit2’= 5***

  Dessa forma, o validador constatou que os dois dígitos verificadores estão corretos, e correspondem a 25, exatamente
como os fornecidos pelo número fictício ***371.476.261-25*** .Logo, o número fictício é um ***C.P.F***. válido.

















