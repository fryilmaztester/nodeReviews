
const piNumber = 3.14;
const parameter = process.argv.slice(2);

function calculateDiameter(diameter){

    let alan = diameter * diameter * piNumber;
    console.log(`Yarıçapı ${diameter} olan dairenin alanı: ${alan}`);
}

//calculateDiameter(3);

calculateDiameter(parameter[0]*1);