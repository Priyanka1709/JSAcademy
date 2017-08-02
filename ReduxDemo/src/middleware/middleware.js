const Logger= store=> next=> action =>{
    console.log("Dispatching", action);
    try{
        var result= next(action);
    }
    catch(e){
        console.log(e);
    }
    
    return result;
} 

export default Logger;