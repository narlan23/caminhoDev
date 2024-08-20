const pergunta = document.getElementById('pergunta');
const btn1 = document.getElementById('btn1');
const resp = document.getElementById('resp');

btn1.addEventListener('click',function(){
    pergunta.innerText = "Se quer seguir para área de Front-End ou seguir para a área de Back-End?";
    const resper = resp.value;
    if(resper == "Front-End"){
        pergunta.innerText =  "se quer aprender React ou aprender Vue?";
        quest01();
    }else if(resper == "Back-End"){
        pergunta.innerText =  "se quer aprender C# ou aprender Java?";
        quest01();
    }
});

function quest01(){
    btn1.addEventListener('click',function(){
        pergunta.innerText = "Se quer seguir entre se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack.";
        const resp2 = resp.value;
        if(resp2 == "Especializar"){
            //pergunta.innerText =  "se torne um especialista!";
            loopQuest();
        }else if(resp2 == "FullStack"){
            //pergunta.innerText =  "se torne um desenvolverdor fullstack!";
            loopQuest();
        }
    });
}

function loopQuest() {
    // Define a pergunta no elemento
    pergunta.innerText = "Quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer?";

    let resp3 = "";
    let text = "";

    // Adiciona um evento de clique ao botão
    btn1.addEventListener('click', function() {
        // Loop para acumular as tecnologias até que o usuário digite "Fim"
        while (resp3.toLowerCase() !== "fim") {
            // Pede ao usuário para digitar uma tecnologia
            resp3 = prompt("Digite uma tecnologia (ou 'Fim' para terminar):");

            // Verifica se a resposta não é "Fim" antes de concatenar
            if (resp3.toLowerCase() !== "fim") {
                text += resp3 + ", ";
            }    
        }

        // Remove a última vírgula e espaço do texto
        text = text.slice(0, -2);

        // Exibe as tecnologias acumuladas
        alert("Suas Tecnologias são: " + text);
    });
}
