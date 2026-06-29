import React from "react";
import Card from "./Card";
import ricktemp from "../../img/ricktemp.jpg"
import fetchCharacterData from "./functions/FetchData";
import getRandomIds from "./functions/Miscellaneous";

let randomIds = getRandomIds()

async function getRandomCharacters(ids) {
    let promises = [];
    for (let id of ids) {
        promises.push(fetchCharacterData(id))
    }
    let results = await Promise.allSettled(promises);
    return results
}

let randomCharacters = await getRandomCharacters(randomIds);

const Section = () => {
    return (
        <div className="mt-5 ps-3 pe-3 row justify-content-center" id="section">
            {randomCharacters.map((character) =>
                <Card 
                    key = {character.value.id}
                    image = {character.value.image}
                    name = {character.value.name}
                    status = {character.value.status}
                    species = {character.value.species}
                    type = {character.value.type}
                    origin = {character.value.origin.name}
                    location = {character.value.location.name}
                />
            )}
        </div>
    )
}

export default Section;
