import { get_users } from './get data/get_users';

export function setupButtons(): void {
    const searchButton = document.getElementById('searchButton');
    const randomButton = document.getElementById('randomButton');
    const clearButton = document.getElementById('clearButton');
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    const resultsContainer = document.getElementById('resultsContainer');
    const message = document.getElementById('message');

    const showSearchMode = (): void => {
        if (clearButton) clearButton.style.display = 'none';
        if (searchButton) searchButton.style.display = 'inline-block';
        if (randomButton) randomButton.style.display = 'inline-block';
        if (resultsContainer) resultsContainer.style.display = 'none';
        if (searchInput) searchInput.style.display = 'block';
    };

    const showResultsMode = (): void => {
        if (clearButton) clearButton.style.display = 'inline-block';
        if (searchButton) searchButton.style.display = 'none';
        if (randomButton) randomButton.style.display = 'none';
        if (resultsContainer) resultsContainer.style.display = 'block';
        if (searchInput) searchInput.style.display = 'none';
    };

    const clearResults = (): void => {
        if (resultsContainer) resultsContainer.innerHTML = '';
        if (message) message.textContent = '';
        searchInput.value = '';
        showSearchMode();
    };

    if (clearButton) {
        clearButton.addEventListener('click', clearResults);
    }

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', async () => {
            const searchTerm = searchInput.value;
            const result = await new get_users().get_by_search(searchTerm);
            if (result.length > 0) {
                displayResults(result);
                showResultsMode();
            } else {
                displayNoResults('No users found');
                showResultsMode();
            }
        });
    }

    if (randomButton) {
        randomButton.addEventListener('click', async () => {
            const result = await new get_users().get_by_random();
            if (result && result.id) {
                displayResults([result]);
                showResultsMode();
            } else {
                displayNoResults('User with this ID not found');
                showResultsMode();
            }
        });
    }

    const displayResults = (results: { id: number, email: string, first_name?: string, last_name?: string, avatar?: string }[]): void => {
        if (resultsContainer) {
            resultsContainer.innerHTML = results.map(result => {
                const fullName = `${result.first_name ?? ''} ${result.last_name ?? ''}`.trim();
                return `
                    <div class="result-card">
                        <h3>${fullName || 'Unknown User'}</h3>
                        <p>ID: ${result.id}</p>
                        <p>Email: ${result.email}</p>
                        ${result.avatar ? `<img src="${result.avatar}" alt="${fullName}" class="avatar">` : ''}
                    </div>
                `;
            }).join('');
        }
    };

    const displayNoResults = (messageText: string): void => {
        if (resultsContainer) {
            resultsContainer.innerHTML = `<div class="result-card"><p>${messageText}</p></div>`;
        }
    };

    showSearchMode();
}
