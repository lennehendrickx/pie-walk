export type Track = {
    name: string
}

export type Song = {
    name: string
    tracks: Array<Track>
}

class SongApi {
    private static SERVER_URL: String = 'http://localhost:8080';

    async list(): Promise<Array<Song>> {
        const response = await fetch(`${SongApi.SERVER_URL}/song/`);
        return response.json();
    }
}

export default new SongApi();