console.log('Hello world');


type User ={
    name: string,
    hobby: Function,
}
const user : User={
   name: 'Pratham',
   hobby: ()=>{
    console.log(this);
   }
}