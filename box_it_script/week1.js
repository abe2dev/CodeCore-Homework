// This function takes a number as an argument and returns that number of horizontal bars as a string.    
function drawLine(num){
    return '─'.repeat(num);
};



// This function takes a number as an argument and draw a top border.
function drawTopBorder(num){
    return '┌' + drawLine(num) + '┐';
};



// This function takes a number as an argument and draw a middle border.
function drawMiddleBorder(num){
    return '├' + drawLine(num) + '┤';
};



// This function takes a number as an argument and draw a bottom border.
function drawBottomBorder(num){
    return '└' + drawLine(num) + '┘';
};



// This function takes a string as an arguments and surrounds it with vertical lines and returns it.
function drawBarsAround(str, num){
    return '│' + str + ' '.repeat(num - str.length) + '│';
};



//This function that takes an array of strings and returns a string where each is in a single column table.
//To add "new lines" to a string, use the \n special character. In a string, \n characters will 
//display as new lines  when logged with console.log(...).

function boxIt(arr){
    let longest = arr[0];
    let result = '';

    for (let str of arr){
        if (str.length > longest.length){
            longest = str;
        }
    }

    const num = longest.length;

    for (let i = 0; i < arr.length; i++){
        if (arr.length === 1){
            result += `${drawTopBorder(num)}\n${drawBarsAround(arr[i], num)}\n${drawBottomBorder(num)}`;
        } else if (i === 0){
            result += `${drawTopBorder(num)}\n${drawBarsAround(arr[i], num)}\n`;
        } else if (i > 0 && i < arr.length - 1){
            result += `${drawMiddleBorder(num)}\n${drawBarsAround(arr[i], num)}\n${drawMiddleBorder(num)}\n`;
        } else {
            result += `${drawBarsAround(arr[i], num)}\n${drawBottomBorder(num)}`;
        }
    }
    return result;
};



console.log(boxIt(['Coding']));
console.log(boxIt(['JavaScript', 'Ruby', 'HTML&CSS']));





