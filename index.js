var displayArea = document.getElementById('display')

function isOperator(buttonText) {
    //checking the button clicked is number or not
    if (buttonText == '+' || buttonText == '-' || buttonText == '/' || buttonText == '%' || buttonText == '*')
        //optimize way
        //if(Number(NaN)) return true
        return true
    else
        return false
}

// function buttonClicked(buttonText) {
//     if(displayArea.innerText.length >= 24)
//         return
//     //Inorder to not conca
//     if (buttonText != "CLR" && buttonText != "DEL" && buttonText != "=") {


//         //In order to disappear 0 when we click on any button
//         if (displayArea.innerText === '0') {
//             //if clicked 00 at start they wont appear instead when add after some number
//             if (buttonText != 0 && buttonText != '00') {//dont do anything button clicked is 0 or 00
//                 //Inorder to get . after 0 not directly (.)
//                 if (buttonText == '.' || isOperator(buttonText)) {//if button clicked is  . or any operator , hen show it 0 followed by button clicked (eg 0.5, 0+5)
//                     displayArea.innerText = displayArea.innerText + buttonText
//                 }
//                 else {
//                     displayArea.innerText = buttonText
//                 }
//             }
//         }
//         else {

//             if (isOperator(displayArea.innerText[displayArea.innerText.length - 1]) && isOperator(buttonText)) {// replace the last operator if some other operaor is clicked after one operator (eg 2+-....instead of 2+ if - is clicked make it 2- )  replace the operator
//                 displayArea.innerText = displayArea.innerText.slice(0, -1) + buttonText

//             }
//             else {
//                 displayArea.innerText = displayArea.innerText + buttonText
//             }
//         }  
//     }
//     // instead of clr and del enter in this area
//     else{
//         if(buttonText === 'CLR'){
//             displayArea.innerText = '0'
//         }
//         //remove last number by using DEL
//         else if(buttonText === 'DEL'){
//             displayArea.innerText = displayArea.innerText.slice(0, -1) 
//         }
//         else if(buttonText === "="){
//             try{
//             displayArea.innerText = eval(displayArea.innerText)
//             }
//             catch(error){
//                 displayArea.innerText = '0'
//             }
//         }

//     }
// }


// Optimising the code

function buttonClicked(buttonText) {
    if (displayArea.innerText.length >= 24)
        return

    if (buttonText === 'CLR') {
        displayArea.innerText = '0'
        return
    }

    if (buttonText === 'DEL') {
        displayArea.innerText = displayArea.innerText.slice(0, -1)
        return
    }

    if (buttonText === "=") {
        try {
            displayArea.innerText = eval(displayArea.innerText)
        }
        catch (error) {
            displayArea.innerText = 0
        }
        return
    }

    if (displayArea.innerText === '0') {
        if (buttonText == 0 && buttonText == '00') {
            return
        }

        if (buttonText == '.' || isOperator(buttonText)) {
            displayArea.innerText = displayArea.innerText + buttonText
            return
        }
        displayArea.innerText = buttonText
    }

    else {
        if (
            isOperator(displayArea.innerText[displayArea.innerText.length - 1]) && isOperator(buttonText)
            ) {

            displayArea.innerText = displayArea.innerText.slice(0, -1) + buttonText
            return
        }
        displayArea.innerText = displayArea.innerText + buttonText
    }
}




