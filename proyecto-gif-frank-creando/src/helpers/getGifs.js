// Definición de la función para obtener los GIFs
export const getGifs = async (searchTerm) => {
    const apiKey = "AIzaSyBWsmlG82H7tqrvYJmKPJa2_dq9SP606Hk";
    const lmt = 8;
    const ckey = "my_test_app";
    const url = `https://tenor.googleapis.com/v2/search?q=${encodeURIComponent(searchTerm)}&key=${apiKey}&client_key=${ckey}&limit=${lmt}`;

    try {
        const resp = await fetch(url);
        if (!resp.ok) {
            throw new Error(`Network response was not ok: ${resp.statusText}`);
        }

        const data = await resp.json();
        const gifs = data.results.map(img => ({
            id: img.id,
            title: img.title,
            url: img.media_formats.gif.url
        }));

        return gifs;
    } catch (error) {
        console.error('Fetching GIFs failed:', error);
        return [];
    }
};

// Uso de la función
getGifs("excited").then(gifs => console.log(gifs));
