import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  open: false,
  id: null,
  nowPlaying: [],
  popular: [],
  topRated: [],
  upcoming: [],
  trailer: null,
};

// Create the movie slice
const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setMovieId: (state, action) => {
      state.id = action.payload;
    },
    setToggle: (state, action) => {
      // Implement the toggle logic (if necessary)
    },
    getTrailerMovie: (state, action) => {
      state.trailer = action.payload;
    },
    getNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    getPopularMovie: (state, action) => {
      state.popular = action.payload;
    },
    getTopRatedMovie: (state, action) => {
      state.topRated = action.payload;
    },
    getUpcomingMovie: (state, action) => {
      state.upcoming = action.payload;
    },
  },
});

// Export the actions and the reducer
export const {
  setOpen,
  setMovieId,
  setToggle,
  getTrailerMovie,
  getNowPlayingMovies,
  getPopularMovie,
  getTopRatedMovie,
  getUpcomingMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
