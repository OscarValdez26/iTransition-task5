import { createRandomUser } from '../scripts/fakeData.js';
import { insertErrors } from '../scripts/insertErrors.js';

export const getData = async (request, response) => {
    const { region, error, seed } = request.body;
    try {
        const registers = [];
        for (let i = 0; i < 20; i++) {
            let key = seed + i;
            let user = createRandomUser(key, region);
            registers.push(user);
        }
        const errorRegisters = JSON.parse(JSON.stringify(registers));
        errorRegisters.map((element) => { insertErrors(element, error); });
        response.status(200).json(errorRegisters);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}