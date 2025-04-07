import axios from 'axios';
import { GetRandom } from './get_rnd';

export class get_users {

    private DATA_URL: string;

    constructor() {
        this.DATA_URL = 'https://reqres.in/api/users';
    }


    public async get_by_search(text: string): Promise<any[]> {
        try {
            const response = await axios.get(this.DATA_URL);
            
            if (response.status !== 200) {
                throw new Error('Failed to fetch data');
            }
    
            const users = response.data.data;


            const filteredUsers = users.filter((user: any) =>
                Object.values(user).some((value) =>
                    String(value).toLowerCase().includes(text.toLowerCase())
                )
            );
            return filteredUsers;
            
        } catch (error) {
            return ['Error fetching users:', error];
        }
    }
    

    public async get_by_random(): Promise<any> {
        try {
            const id = await GetRandom.get_new_num();
            if (id === null) {
                throw new Error('Invalid ID');
            }
    
            const validId = (id % 12) + 1;
    
            const response = await axios.get(`${this.DATA_URL}/${validId}`);
            if (response.status !== 200) {
                throw new Error(`Failed to fetch data for ID ${validId}`);
            }
    
            return response.data.data;
    
        } catch (error) {
            console.error('Error fetching users:', error);
            return null;
        }
    }
} 