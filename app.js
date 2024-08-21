const pergunta = document.getElementById('pergunta');
const btn1 = document.getElementById('btn1');
const resp = document.getElementById('resp');
let Oresp = "";

btn1.addEventListener('click',function(){
    pergunta.innerText = "Se quer seguir para área de Front-End ou seguir para a área de Back-End?";
    Oresp = resp.value;
    if(Oresp.toLowerCase() === "front-end"){
        pergunta.innerText =  "se quer aprender React ou aprender Vue?";
        btn1.onclick = function(){
            quest01();
        }     
    }else if(Oresp == "Back-End"){
        pergunta.innerText =  "se quer aprender C# ou aprender Java?";
        quest01();
    }
});

function quest01(){
    
        pergunta.innerText = "Se quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack.";
        //Oresp = resp.value;
        if(Oresp.toLowerCase() === "especializar"){
            pergunta.innerText =  "se torne um especialista!";
            btn1.onclick = function(){
                quest02();
            }
        }else if(Oresp.toLowerCase() === "fullstack"){
            pergunta.innerText =  "se torne um desenvolverdor fullstack!";
            btn1.onclick = function(){
                quest02();
            }
        }
    
}

function quest02(){
        btn1.onclick = function(){
            if(Oresp.toLowerCase() === "especializar"){
                pergunta.innerText = "Quais são as tecnologias que deseja especializar ou de conhecer?";
                loopQuest();
            }else if(Oresp.toLowerCase() === "fullstack"){
                pergunta.innerText = "Quais são as tecnologias deseja aprender?"
                loopQuest();
            }
        }     
}

function loopQuest() {
    

    let resp3 = "";
    let text = "";

    // Adiciona um evento de clique ao botão
    
        // Loop para acumular as tecnologias até que o usuário digite "Fim"
        while (resp3.toLowerCase() !== "fim") {
            // Define a pergunta no elemento
            pergunta.innerText = "Quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer?";
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
    
}
