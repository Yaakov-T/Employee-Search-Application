export function setupButtons(): void {
    const handleSearch = (): void => {
        const searchTerm = (document.getElementById('searchInput') as HTMLInputElement).value;
        alert(`Search term: ${searchTerm}`);
        console.log('Search term:', searchTerm);
    };

    const handleRandomSearch = (): void => {
        const random: number = Math.floor(Math.random() * 1000);
        alert(`Random number: ${random}`);
        const randomNumberElement = document.getElementById('randomNumber');
        if (randomNumberElement) {
            randomNumberElement.innerText = 'Random Number: ' + random;
        }
        console.log('Random number:', random);
    };

    const searchButton = document.getElementById('searchButton');
    const randomButton = document.getElementById('randomButton');

    if (searchButton) {
        searchButton.addEventListener('click', handleSearch);
    }

    if (randomButton) {
        randomButton.addEventListener('click', handleRandomSearch);
    }
}
