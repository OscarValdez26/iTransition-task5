const URL = "https://task5-backend-bb0aabfe51b7.herokuapp.com/getusers";


export async function getData(json) {
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: json
        });

        if (!response.ok) {
            throw new Error("Something went wrong");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
        return null; // or handle the error as needed
    }
}