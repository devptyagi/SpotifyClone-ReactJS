export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null
    //to be removed
    //token: 'BQC_JM1rMXt8i9jw6CwyXLaMrQXX1RZo7RF2yxLXIeNsNcBi8PhdpaVEqz0KTWJiUzUWi9k7R3nIAyq9VU-UxenaiuUN6ZtNpaI8AjwrhNtQcsJ6xDR_D7qA5i25IKcRp1UIgDuq_jyqGRBvCI8Y8i-GvOjTT0NcAjItKI5F7d58qG9KOMXW'
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token 
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_TOP_PLAYLIST':
            return {
                ...state,
                top_playlist: action.top_playlist
            }
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            }
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            }
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        default:
            return state;
    }
}

export default reducer;