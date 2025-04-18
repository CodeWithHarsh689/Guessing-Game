const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function guess_the_number() {
    let guess = Math.floor(Math.random() * 50 + 1 )
    let inputnum;
    let num;
    let attempt = 0;
    console.log("🎯 we are welcoming you in our guessing game. Here you can win by guessing the number, and if your number is matching to the mine you will win 🏆, and if it is diffrent you loose 👎🏻.")

    do {
        const user_input = await new Promise((resolve) => {
            rl.question("Enter your number here: ",(inputnum) => {
            resolve(inputnum);
            });
        });

        num = parseInt(user_input);
        attempt++;

        if(isNaN(num)){
            console.log("❌ ERROR, Please enter a valid number here ");
        }
            else if(num > guess){
                console.log("🔺 Your number is bigger please try again ");
            }
            else if(num < guess){
                console.log("🔻 Your number is smaller please try again ");
            }
            else if(num === guess){ 
                console.log(`🥳 Congratulations 💐 you won 🏆 in ${attempt} attemps.`);
            }
        else{
            console.log("🫨 Something went wrong.");
        }
    }
    while(num !== guess)
        rl.close()
    
}
guess_the_number();





