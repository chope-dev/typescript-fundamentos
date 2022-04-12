(()=>{
    let myDynamicVar: any;
    myDynamicVar = 100;
    myDynamicVar = null;
    myDynamicVar = {};
    myDynamicVar = '';


//Hay 2 formas de hacer un cast -> la primera:
    myDynamicVar = 'Hola';
    const rta = (myDynamicVar as string).toLowerCase();
    console.log(rta);
//2da:
    myDynamicVar = 1212;
    const rta2 = (<number>myDynamicVar).toFixed();
    console.log(rta2);
})();