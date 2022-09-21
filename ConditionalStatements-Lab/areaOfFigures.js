function areaOfFigures(input){
    let figure = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    let result = 0;

    if(figure === "square"){
        result = a * a;
        console.log(result.toFixed(3))
    } else if(figure === "rectangle"){
        result = a * b;
        console.log(result.toFixed(3));
    } else if(figure === "circle"){
        result = Math.PI * (a * a);
        console.log(result.toFixed(3));
    } else if(figure === "triangle"){
        result = (a * b) / 2;
        console.log(result.toFixed(3));
    }
}
areaOfFigures(["triangle", "4.5", "20"])