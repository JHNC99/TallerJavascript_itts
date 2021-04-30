//declaracion de una matriz

var Alumnos = ["Julian", "Eduardo", "Elisama"];
//accesar a un arreglo

// console.log(Alumnos[0])
// console.log(Alumnos[1]);
// console.log(Alumnos[2]);
//Obtener el tamaño del arreglo

//Iterar un arreglo

/* for(var i=0; i<Alumnos.length;i++){
    console.log(Alumnos[i]);
}
 */

//  for( var i of Alumnos){
//      console.log(i);
//  }

/*  Alumnos.map((item)=>{console.log(item)}); */



/* 
    INSERTAR DATOS EN UN ARREGLO
*/

/* Alumnos.push('Clodomira');
console.log(Alumnos.length);
Alumnos.forEach((item)=>{    
    console.log(item)
})  */

/* 
    REMOVER DATOS EN UN ARREGLO
*/

/* 
pop()-> borra el ultimo elemento del arreglo
unshift()->agrefa  el primer elemento del arreglo
shift()->Borras el primer elemento del arreglo
*/

// const last=Alumnos.pop();
// console.log(last);

const firstElement=Alumnos.shift();
console.log(firstElement);

/* Alumnos.unshift('Nuevo nombre')
Alumnos.forEach((item)=>{    
    console.log(item)
})  */
