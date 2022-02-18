const indicadores = "http://localhost:3000/indicadores"
const simulacoes = "http://localhost:3000/simulacoes"
let aporte__ini 
let aporte__mens 
let rent 
let deadline 
let rendimento
let indexacao
let rendimentoValue
let indexacaoValue
const inputs = []

function getIndicadores() {
  axios.get(indicadores)
  .then(response => {
    const data = response.data
    const cdi = data.slice(0,1)
    const ipca = data.slice(1)
    const cdiValor = cdi.map((item)=>{
      return CDI.value = `${item.valor}%`
    })
    const ipcaValor = ipca.map((item)=>{
      return IPCA.value = `${item.valor}%`
    })     
    })
  .catch(error => console.error(error))
}
getIndicadores()


 function getSimulacao() {
  axios.get(simulacoes)
  .then(response => {
    const data = response.data
    for (let item of data) {
      if(item.tipoIndexacao === indexacaoValue && item.tipoRendimento === rendimentoValue){
        valor_final_bruto.innerHTML = `R$ ${item.valorFinalBruto}`;
        aliquota_IR.innerHTML = `${item.aliquotaIR}%`;
        valor_pago_IR.innerHTML = `R$ ${item.valorPagoIR}`;
        valor_final_liquido.innerHTML = `R$ ${item.valorPagoIR}`;
        valor_total_investido.innerHTML = `R$ ${item.valorTotalInvestido}`;
        ganho_liquido.innerHTML =`R$ ${item.ganhoLiquido}`
      }    
    }   
  })
  .catch(error => console.error(error))
}

function getCamps() {
  rendimento = document.getElementsByName('tipo_de_rendimento')
  for (let i = 0; i < rendimento.length ; i++) {
    if(rendimento[i].checked){
      rendimentoValue = rendimento[i].value
    }
  }
  indexacao = document.getElementsByName('indexacao')
  for (let i =0; i < indexacao.length; i++){
    if(indexacao[i].checked) {
      indexacaoValue = indexacao[i].value
    }
  }
  aporte__ini = aporte__inicial.value;
  aporte__mens = aporte__mensal.value;
  rent = rentabilidade.value;
  deadline = prazo.value;
  inputs.push(aporte__ini, aporte__mens, rent, deadline)
}

btn__clear.addEventListener('click', function() {
  document.querySelector('.container__right').style.display = "none"
  aporte__inicial.value = '';
  prazo.value = '';
  aporte__mensal.value = '';
  rentabilidade.value = '';
  inputs.splice(0, 4)
})


btn__submit.addEventListener('click', function() {
  if(aporte__inicial.value !== '' && aporte__mensal.value !== '' && rentabilidade.value !== '' && prazo.valor !== '') {
    getCamps()
    getSimulacao()
    document.querySelector('.container__right').style.display="flex"    
  } else {
    alert("Campos necessários estão em branco.");
  }
    
})