let name = prompt('Qual seu nome turista?')
let question = prompt('Você visitou alguma cidade? (ex:s/n)')
let city = ''
let numberOfCities = 0
let visitedCities = 0

while(question == 's'){
  city = prompt('Qual o nome da cidade visitada?')
  if (numberOfCities == 0){
    visitedCities = `- ${city}`
  } else {
    visitedCities += `
 - ${city}`
  }
  numberOfCities++
  
  question = prompt('Você visitou alguma outra cidade? (ex:s/n)')

}

if(numberOfCities > 0){
  alert(`Turista: ${name}
Quantidade de cidades visitadas: ${numberOfCities}
Cidades visitadas: 
 ${visitedCities}`)
} else {
  alert(`Turista: ${name}
Quantidade de cidades visitadas: ${numberOfCities}
Nenhuma cidade visitada`)
}
