export default function ReducerAction(state, action){
    console.log(state);
    console.log(action); // action -> action.type  action.payload state -> initial value

    switch (action.type) {
        case "ADD":{
            return state + action.payload 
        }
        case "SUB":{
            return state - action.payload
        }                
    
        default:{
            return state;
        }
            
    }
    

}