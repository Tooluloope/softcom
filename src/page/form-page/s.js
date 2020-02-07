// const handleInputChange =(name, value) => {
//     const newState = Object.assign({}, data)
//     newState[name] = value
    
   
//     if(name === 'date') {

//         if(value.length > 5){
//             console.log(value)
//             value = value.slice(0, -1);
//             newState[name] = value
            
//             setdata(newState)
//             return
//         }
//         else if(value.length > 5 || isNaN(parseInt(value.charAt(value.length -1)))) {
            
//             return
//         }
//         else{
//             let data = value.replace(/\W/gi, '').replace(/(.{2})/g, '$1/'); 

//             if(value.length > 4){
//                 console.log(value)
//                 data = data.slice(0, -1);
                
//             }           
//             newState[name] = data
            
//             setdata(newState)
//             return
//         }
//     }
//     else if (name === 'card_number'){
//         if(value.length > 19 || isNaN(parseInt(value.charAt(value.length -1)))) {
//             return
//         }
//         else{
//             let newCard = value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');  
//             if(newCard.length > 18){
//                 console.log(value)
//                 newCard = newCard.slice(0, -1);
                
//             }              
//             newState[name] = newCard
//         }
        
//     }
//     else{
//         updateValidators(name, value, validators)
//     }
//     setdata(newState)
//   }