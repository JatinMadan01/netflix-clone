import axios from "axios";
import { options } from '../utils/constant';
import { useDispatch } from "react-redux";
import { getTrailerMovie } from '../redux/movieSlice';
import { useEffect } from "react";

const useMovieById = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);

        // Check if the response contains results
        if (res?.data?.results) {
          const trailer = res.data.results.filter((item) => item.type === "Trailer");
          
          // Dispatch the trailer or the first video result if no trailer exists
          dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]));
        } else {
          console.error("No results found in response.");
        }
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
    };

    if (movieId) {
      getMovieById();
    }
  }, [movieId, dispatch]);
};

export default useMovieById;
