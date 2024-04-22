export default async function fetchData(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (res.ok) {
            return data;
        } else {
            throw new Error("ERROR: Couldn't fetch the data");
        }
    } catch (error) {
        console.error(error);
        return JSON.parse(JSON.stringify(error));
    }
}