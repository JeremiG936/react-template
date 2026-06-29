async function fetchCharacterData(searchTerm) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${searchTerm}`);
        if (!response.ok) {
            throw new Error("Could not fetch data")
        }
        const data = await response.json();
        return data
    }
    catch(error){
        console.log(error)
    }
}

export default fetchCharacterData;
