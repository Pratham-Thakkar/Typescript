// think use case of satisfies keyword in typescript
// extending types



//bigint
function convertToBinary(x: bigint) {
    let bin = 0n;
    let rem, i = 1n, step = 1n;
    while (x!= 0n) {
        rem = x % 2n;
        x = (x / 2n);
        bin = bin + rem * i;
        i = i * 10n;
    }
    console.log(`Binary: ${bin}`);
}
convertToBinary(8n)

function convertToBinaryNormal(x:number) {
    let bin = 0;
    let rem,
      i = 1
    while (x != 0) {
      rem = x % 2;
      x = x / 2;
      bin = bin + rem * i;
      i = i * 10;
    }
    console.log(`Binary: ${bin}`);
  }
  convertToBinaryNormal(7890678);


//case for satisfies
type Route = { path: string; children?: Routes }
type Routes = Record<string, Route>

const routes: Routes = {
  AUTH: {
    path: "/auth",
    children:{
        ADDUSER:{
            path:'/addUser'
        }
    }
  },
}
routes.Nonsense.path

//Using as keyword, it is generally used for type assertion
//Only use it when we want to assert an another data type to it
const routes2={ //quite dangerous
    AUTH:{
        path: '/auth',
        nonsense: true
    },
} as Routes //Please avoid using as keyword

routes.Nonsense.path

//Finally satisfies saves our day
const routes3 ={
    Auth:{
        path: '/auth',
        nonsense: true
    }
} satisfies Routes

//thanks to satisfies

//Extending Types
//We can use intersection (&)

type User={
    name: string,
    gender: 'male'|'female'
}

type ActiveUser = User & {isAlive: boolean}

const user : ActiveUser ={
    name:'pratham',
    gender: 'male',
    isAlive: true
    // anyThing: 'ok'
}

//truthy values
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)

//falsy values
if (false) {
    // Not reachable
  }
  
  if (null) {
    // Not reachable
  }
  
  if (undefined) {
    // Not reachable
  }
  
  if (0) {
    // Not reachable
  }
  
  if (-0) {
    // Not reachable
  }
  
  if (0n) {
    // Not reachable
  }
  
  if (NaN) {
    // Not reachable
  }
  
  if ("") {
    // Not reachable
  }


export{}