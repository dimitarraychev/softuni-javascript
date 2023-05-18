function finishingProjects(input) {
    let name = input[0];
    let projectCount = Number(input[1]);
    let totalHours = projectCount * 3;

    console.log(`The architect ${name} will need ${totalHours} hours to complete ${projectCount} project/s.`);
}

finishingProjects(["George", "4"]);