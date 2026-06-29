function getRandomIds() {
    let result = [];
    for (let i = 0; i < 10; i++) {
        let randomNum = Math.floor(Math.random() * 827);
        result.push(randomNum)
    }
    return result
}

export default getRandomIds;