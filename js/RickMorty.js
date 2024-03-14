document.addEventListener("DOMContentLoaded", function() {
    const charactersContainer = document.getElementById('characters');

    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            data.results.forEach(character => {
                const characterCard = `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="${character.image}" class="card-img-top" alt="${character.name}">
                            <div class="card-body">
                                <h5 class="card-title">${character.name}</h5>
                                <p class="card-text">Specie: ${character.species}</p>
                                <p class="card-text">Status: ${character.status}</p>
                            </div>
                        </div>
                    </div>
                `;
                charactersContainer.innerHTML += characterCard;
            });
        })
        .catch(error => console.error('Error:', error));
});
