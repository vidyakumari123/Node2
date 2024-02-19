const readline = require('readline');
const { add, subtract, multiply } = require('./cal');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptUser() {
    rl.question('Press 1 for addition, 2 for subtraction, 3 for multiplication, or 0 to exit: ', (choice) => {
        if (choice === '0') {
            rl.close();
            return;
        }

        rl.question('Enter first number: ', (num1) => {
            rl.question('Enter second number: ', (num2) => {
                let result;
                switch(choice) {
                    case '1':
                        result = add(parseFloat(num1), parseFloat(num2));
                        console.log(`Result: ${num1} + ${num2} = ${result}`);
                        break;
                    case '2':
                        result = subtract(parseFloat(num1), parseFloat(num2));
                        console.log(`Result: ${num1} - ${num2} = ${result}`);
                        break;
                    case '3':
                        result = multiply(parseFloat(num1), parseFloat(num2));
                        console.log(`Result: ${num1} * ${num2} = ${result}`);
                        break;
                    default:
                        console.log('Invalid choice. Please try again.');
                        break;
                }
                
                promptUser();
            });
        });
    });
}

promptUser(); 
