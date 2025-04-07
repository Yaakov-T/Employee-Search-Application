import './style.css';
import { setupButtons } from './setupButtons';

const app = document.querySelector<HTMLDivElement>('#app');
if (app) {
    app.innerHTML = `
        <div class="container">
            <div class="card">
                <h2>User Search</h2>
                <input type="text" id="searchInput" class="input" placeholder="Enter search term">
                <div>
                    <button class="button" id="searchButton">Search</button>
                    <button class="button" id="randomButton">Random Search</button>
                    <button class="button" id="clearButton" style="display: none;">Clear</button>
                </div>
                <div id="resultsContainer" class="results-container">
                    <p id="message" class="message"></p>
                </div>
            </div>
        </div>
    `;
    setupButtons();
}
