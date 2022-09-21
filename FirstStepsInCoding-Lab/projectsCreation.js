function projectsCreation(input) {
    let name = input[0];
    let projectCount = Number(input[1]);
    let hours = projectCount * 3;

    console.log(`The architect ${name} will need ${hours} hours to complete ${projectCount} project/s.`)
}
projectsCreation([
    "George ",
    "4 "
]);
projectsCreation(["Sanya ",
"9 "]
);