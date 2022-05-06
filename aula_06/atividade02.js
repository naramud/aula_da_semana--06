// comente com exemplo a diferença entre o PUT e o PATCH?
//O PATCH é usado para atualização parcial, quando você não quer mandar o payload completo. PUT: é quando tu faz uma requisição a um recurso para modificá-lo. Nesse método tu irá mudar todo os dados do recurso, como no exemplo do Luís, se caso esse recurso não exista, é possível criá-lo através dessa única requisição.

//Digamos que o lote 1 tenha uma casa equipada com todas as comodidades. Fazer uma solicitação PUT pode levar a vários resultados. No entanto, para manter o tópico, vamos considerar a seguinte solicitação: https://domain.com/house/1 using this payload:
const ativiade = [
    {
        "front_patio" : true ,
        "back_patio" : true ,
        "janelas" : 12 ,
        "portas" : 4 ,
        "Varanda" :false
       },
        
       //Agora que temos uma casa no lote 1, o que acontecerá é que todas as propriedades da casa serão substituídas pelos dados da carga útil. Então, se nosso payload tivesse apenas as seguintes informações:
       
       {
        "portas" : 5
       },
       //Teremos uma casa que tem propriedades de portas e nada mais, pois uma solicitação PUT substitui tudo.
       
       //E se emitirmos uma solicitação PUT em um recurso que não existe? Neste caso, digamos no lote 3: https://domain.com/house/3. Nesse caso, um novo recurso será criado. Mas é crucial observar que é imperativo definir todo o recurso ao fazer solicitações PUT, caso contrário, isso poderá gerar resultados indesejados.
       
       //CORREÇÃO
       //PATCH é usado quando você deseja aplicar uma atualização parcial ao recurso. Vamos supor que a casa do lote 1 tenha as seguintes características:
       
       {
        "front_patio" : true ,
        "back_patio" : true ,
        "janelas" : 12 ,
        "portas" : 4 ,
        "Varanda" : false
       },
        
       
       //E queremos fazer a seguinte atualização:
       
       {
        "portas" : 5
       },
        
       
       //O resultado será o seguinte:
       
       {
       "front_patio" : true ,
       "back_patio" : true ,
       "janelas" : 12 ,
       "portas" : 5 ,
       "Varanda" : false
       },
       //Além disso, também podemos adicionar um novo recurso que não existia no recurso. Por exemplo, uma garagem e o resultado será:
       
       {
       "front_patio" : true ,
        "back_patio" : true ,
        "janelas" : 12 ,
        "portas" : 5 ,
        "Varanda" : false ,
       garagem : true
       },
]


module.exports = ativiade