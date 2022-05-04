function finalizar(){
    var txtmaca = document.getElementById('txtmaca')
    var txtpera = document.getElementById('txtpera')
    var txtabacaxi = document.getElementById('txtabacaxi')
    var pedidos = document.getElementById('finalPedido')
    var nome = document.getElementById('nomeCliente')
    var endereco = document.getElementById('endereco')
    var pag = document.getElementsByName('radioPag')

    maca = Number(txtmaca.value)
    pera = Number(txtpera.value)
    abacaxi = Number(txtabacaxi.value)
    nome = String(nome.value)
    endereco = String(endereco.value)
    pagou = ''
    if(pag[0].checked){
        pagou = "Dinheiro"
    }else if(pag[1].checked){
        pagou = "Cartão"
    }

    pedidos.innerHTML = `Pedido efetuado com sucesso! <br> Voce comprou: 
    <br> 
    ${maca} Maçãs
    <br> 
    ${pera} Peras 
    <br>
    ${abacaxi} Abacaxi
    <br>
    O pedido será entregue no endereço: ${endereco}
    <br>
    O tempo médio de chegada é de 30 minutos.
    <br>
    Obrigada por comprar na minha feira, ${nome}!  `

}