📽️ Netflix
A React-based movie browsing application that allows users to search, explore, and view details of movies. It also provides user authentication for protected access and leverages multiple APIs to fetch popular, top-rated, and upcoming movies.

🌐 Live Demo
Check out the live version of the project:
Netflix Clone

🚀 Features
User Authentication: Login and signup functionality.
Browse Movies: Explore movies by category – Now Playing, Popular, Upcoming, and Top Rated.
Search Functionality: Users can search for movies by name.
Protected Routes: Users need to log in to access the Browse page.
Redux for State Management: Manage user and movie states effectively.
Responsive Design: Mobile-friendly layout with clean UI.
FAQ Section: Provide quick answers to common questions.
Footer Component: Include quick links and app info.
🛠️ Tech Stack
Frontend: React, Tailwind CSS
State Management: Redux Toolkit
Routing: React Router
API: TMDB API for movies
Authentication: Axios + JWT (backend required)
Notifications: react-hot-toast
🔍 API Endpoints
🎬 TMDB Movie APIs
Now Playing Movies
GET:
https://api.themoviedb.org/3/movie/now_playing

Popular Movies
GET:
https://api.themoviedb.org/3/movie/popular

Top Rated Movies
GET:
https://api.themoviedb.org/3/movie/top_rated

Upcoming Movies
GET:
https://api.themoviedb.org/3/movie/upcoming

Search Movies
GET:
https://api.themoviedb.org/3/search/movie?query={movie_name}

Movie Poster URL
Base URL for Posters:
https://image.tmdb.org/t/p/w500

➡️ For more details on TMDB API, visit the TMDB API Documentation.

🔑 Backend API (User Authentication)
Login User
POST:
https://netflixclone-5hqh.onrender.com/api/v1/user/login
Request Body:
{
  "email": "user@example.com",
  "password": "password123"
}
