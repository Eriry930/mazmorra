//variable del texto
let canvas;
// variable del contexto
let ctx;
//FPS
const FPS =50;
//ancho de la ficha
let anchoF = 50;
let altoF = 50;

//Tipo de ficha
let pasto ="rgb(144, 146, 39)";
let lava = "rgb(295, 104, 6)";
let tierra = "rgb(87, 17, 3)";
let agua = "rgb(79, 94, 298)";

//Escenario Array - Matriz se puede cambiar el numero por letras
let escenario = [
    [0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //Posicion 0
    [0,2,0,2,2,2,0,2,2,2,2,2,2,2,0,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0], //Posicion 1
    [0,2,0,2,0,2,0,2,0,0,0,0,0,2,0,2,1,1,1,2,0,2,0,0,0,0,0,0,2,0], //Posicion 2
    [0,2,0,2,0,2,0,2,0,2,2,2,2,2,0,2,0,2,2,2,0,2,0,2,2,2,2,2,2,0], //Posicion 3
    [0,2,2,2,0,2,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,2,0,2,0,0,0,0,0,0], //Posicion 4
    [0,0,0,0,0,2,0,2,0,2,2,2,2,2,2,2,0,2,0,2,2,2,0,2,2,2,2,2,2,0], //Posicion 5
    [0,2,2,2,2,2,0,2,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,2,0], //Posicion 6
    [0,2,0,0,0,0,0,2,0,2,2,2,2,2,2,2,2,2,0,2,0,2,2,2,2,2,2,2,2,0], //Posicion 7
    [0,2,0,2,2,2,2,2,0,2,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0], //Posicion 8
    [0,2,0,2,1,1,0,0,0,2,0,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0], //Posicion 9
    [0,2,0,2,2,2,0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0], //Posicion 10
    [0,2,0,0,0,2,0,2,0,0,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0], //Posicion 11
    [0,2,2,2,2,2,0,2,0,2,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //Posicion 12
    [0,0,0,0,0,0,0,2,0,2,0,0,0,2,0,2,2,2,0,2,2,2,0,2,2,2,1,1,1,0], //Posicion 13
    [0,2,2,2,2,2,2,2,0,2,0,2,2,2,0,2,0,2,0,2,0,2,0,2,0,2,1,1,1,0], //Posicion 14
    [0,2,0,0,0,0,0,0,0,2,0,2,0,0,0,2,0,2,0,2,0,2,0,2,0,2,1,1,1,0], //Posicion 15
    [0,2,0,2,2,2,0,2,2,2,0,2,0,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0], //Posicion 16
    [0,2,0,2,0,2,0,2,0,0,0,2,0,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,2,0], //Posicion 17
    [0,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,2,2,0,2,2,2,0,2,0], //Posicion 18
    [0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,2,0,0,0,0,2,0,2,0,2,0,2,0], //Posicion 19
    [0,2,2,2,2,2,2,2,2,2,0,2,2,2,0,2,0,2,2,2,2,0,2,0,2,0,2,0,2,0], //Posicion 20
    [0,2,1,1,1,0,0,0,0,0,0,2,0,2,0,2,0,0,0,0,2,0,2,2,2,0,2,2,2,0], //Posicion 21
    [0,2,1,1,1,2,2,2,2,2,2,2,0,2,0,2,0,2,2,2,2,0,0,0,0,0,0,0,0,0], //Posicion 22
    [0,2,1,1,1,2,0,0,0,0,0,0,0,2,0,2,0,2,0,0,0,0,2,2,2,2,2,2,2,0], //Posicion 23
    [0,2,0,2,2,2,0,2,2,2,2,2,2,2,0,2,0,2,0,2,2,2,2,0,0,0,0,0,2,0], //Posicion 24
    [0,2,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,2,0,2,0,0,0,0,2,2,2,2,2,0], //Posicion 25
    [0,2,0,2,2,2,0,2,0,2,2,2,1,1,2,2,0,2,0,2,2,0,2,2,2,0,0,0,0,0], //Posicion 26
    [0,2,0,0,0,2,0,2,0,2,0,2,1,1,2,1,1,2,0,0,2,0,2,0,0,0,2,2,2,0], //Posicion 27
    [0,2,2,2,2,2,0,2,2,2,0,2,2,2,2,1,1,2,2,2,2,0,2,2,2,2,2,0,2,0], //Posicion 28
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0] //Posicion 29
]

// Construir escenario
function dibujarEscenario(){
    let color;
    //Recorrer el alto del escenario
    for(y=0; y < escenario.length; y++){
        //Recorrer el ancho del escenario
        for(x=0; x <escenario[y].length; x++){
            // compara para reemplazar la ficha
            if(escenario[y][x] == 0){
                color = pasto;
            }
            if(escenario[y][x] == 1){
                color = lava;
            }
            if(escenario[y][x] == 2){
                color = tierra;
            }
            if(escenario[y][x] == 3){
                color = agua;
            }
            ctx.fillStyle = color
            ctx.fillRect(x*anchoF,y*altoF,anchoF,altoF)

        }

    }
}


// Declaramos la funcion del personaje
let jugador = function(){
    //Atributo de esta clase
    this.x=1;
    this.y=0;
    this.color ="black"

    //Metodos
    this.dibuja = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x*anchoF,this.y*altoF,anchoF,altoF);
    }

    this.arriba = function(){
        if(this.margenes(this.x, this.y - 1) ==  false){
        this.y--
        
        }
    
    }

    this.abajo = function(){
        if(this.margenes(this.x, this.y + 1) == false){
        this.y++
        }

    }

    this.derecha = function(){
        if(this.margenes(this.x + 1, this.y) == false){
        this.x++
        }
    }

    this.izquierda = function(){
        if(this.margenes(this.x - 1, this.y) == false){
        this.x--
        }
    }

    this.margenes = function (x,y){
        let colisiones = false
        if(escenario [y][x] == 0 || escenario [y][x] == 1 ){
            colisiones = true}
            return(colisiones)
    }


        


}

//Variable global
let protagonista;


// Esta funcion lo activa todo
function inicializa(){
    canvas = document.getElementById("canva")
    ctx = canvas.getContext("2d")

    // creo al jugador
    protagonista = new jugador()

    //Lectura del teclado
    document.addEventListener('keydown',function(tecla){
        if (tecla.key == "ArrowUp"){
            protagonista.arriba()    
        }
        else if (tecla.key == "ArrowDown"){
            protagonista.abajo()    
        }
         else if (tecla.key == "ArrowRight"){
            protagonista.derecha()    
        }
        else if (tecla.key == "ArrowLeft"){
            protagonista.izquierda()    
        }
        



    
    })
     

    

    setInterval(function(){ // intervalo de tiempo de ejecucion 
    principal()
    },1000/FPS)

 // Esta funcion centraliza las demás funciones
    function principal(){
        dibujarEscenario()
        protagonista.dibuja();
    }
}