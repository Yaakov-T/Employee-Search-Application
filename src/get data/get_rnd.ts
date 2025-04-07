import axios from 'axios';

export class GetRandom {
    static RANDOM_NUMBER_URL: string = 'https://random-data-api.com/api/number/random_number';

    constructor() { }

    static async get_new_num(): Promise<number | null> {
        try {
            const response = await axios.get(this.RANDOM_NUMBER_URL);
            if (response.status !== 200) {
                throw new Error('Failed to fetch random number');
            }
            return response.data.id;
        } catch (error) {
            console.error('Error fetching random number:', error);
            return null;
        }
    }
}
