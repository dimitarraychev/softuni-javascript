function constructionCrew(worker) {

    let result = Object.assign({}, worker)

    if (worker.dizziness) {
        result.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        result.dizziness = false;
    }

    return result;
}

console.log(constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));
console.log(constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}));