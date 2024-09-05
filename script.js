let name = prompt('Qual seu nome turista?')
let question = prompt('Você visitou alguma cidade? (ex:s/n)')
let city = []
let numberOfCities = 0


while(question == 's'){
  city[numberOfCities] = prompt('Qual o nome da cidade visitada?')
  numberOfCities += 1
  
  question = prompt('Você visitou alguma outra cidade? (ex:s/n)')

}
alert(`Turista: ${name}
Quantidade de cidades visitadas: ${numberOfCities}
Cidades visitadas:${city}`)
