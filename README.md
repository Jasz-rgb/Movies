<a name="readme-top"></a>
# 🎬 Movie Recommendation System
A full-stack movie recommendation platform built using React, FastAPI, Scikit-Learn, and TMDB API.
The application allows users to browse trending, popular, top-rated and upcoming movies, search for movies, view detailed information, and receive both content-based (TF-IDF) and genre-based recommendations.

🌐 **Live Demo:** https://jasz-rgb.github.io/Movies/

⚙️ **Backend API:** https://movies-cy7z.onrender.com/docs#/

# Table of Contents
<!--ts-->
* [Implementation](#implementation)
  * [Home Page](#home-page)
  * [Movie Search](#movie-search)
  * [Movie Details](#movie-details)
  * [Recommendation System](#recommendation-system)
* [Application Programming Interface (API)](#application-programming-interface-api)
  * [Home Feed API](#home-feed-api)
  * [Movie Search API](#movie-search-api)
  * [Movie Details API](#movie-details-api)
  * [Recommendation API](#recommendation-api)
* [Technologies & Frameworks](#technologies--frameworks)
* [Project Structure](#project-structure)
* [Installation](#installation)
* [Deployment](#deployment)
<!--te-->

# Implementation
### 1. Home Page
Browse movies across multiple categories including Trending, Popular, Top Rated and Upcoming releases.
<img width="1920" height="1080" alt="1" src="https://github.com/user-attachments/assets/b06fddfa-bc29-4f10-81ae-d9c8243aa18f" />

### 2. Movie Search
Search movies using TMDB and instantly view matching results.
<img width="1920" height="1080" alt="2" src="https://github.com/user-attachments/assets/d09a9015-63ce-4197-954d-878f214172cb" />

### 3. Movie Details
View detailed movie information including:

* Poster
* Backdrop
* Overview
* Genres
* Release Date
* Trailer Search - YouTube video link
<img width="1920" height="1080" alt="3" src="https://github.com/user-attachments/assets/10303c81-6a80-4f56-b64e-c34739c8e9ab" />

### 4. Recommendation System
#### 🔎 TF-IDF Recommendations
Content-based recommendations generated using:
* Overview
* Genres
* Taglines

> Note: TF-IDF recommendations depend on successful title matching between TMDB results and the local dataset. As a result, some movies may not display TF-IDF recommendations even though they exist on TMDB. When TF-IDF recommendations are unavailable, genre-based recommendations are still provided.
<img width="1920" height="1080" alt="4" src="https://github.com/user-attachments/assets/99cb45f4-4786-46f7-ac6a-29ab73dfd88f" />

#### 🎭 Genre Recommendations
Fallback recommendations generated directly from TMDB using genre similarity.
<img width="1920" height="1080" alt="5" src="https://github.com/user-attachments/assets/c464f494-5c9d-4ca7-bb0d-21a08954fbfd" />

<p align="right">(<a href="#readme-top">bac
k to top</a>)</p>

# Application Programming Interface (API)
<img width="1900" height="1073" alt="image" src="https://github.com/user-attachments/assets/b76b81d5-4bc7-4086-a9ac-b006b9e34526" />

### Home Feed API
| Method | Endpoint                   |
| ------ | -------------------------- |
| `GET`  | `/home?category=trending`  |
| `GET`  | `/home?category=popular`   |
| `GET`  | `/home?category=top_rated` |
| `GET`  | `/home?category=upcoming`  |

### Movie Search API
| Method | Endpoint                     |
| ------ | ---------------------------- |
| `GET`  | `/tmdb/search?query={movie}` |

### Movie Details API
| Method | Endpoint              |
| ------ | --------------------- |
| `GET`  | `/movie/id/{tmdb_id}` |

### Recommendation API
| Method | Endpoint                      |
| ------ | ----------------------------- |
| `GET`  | `/movie/search?query={movie}` |

Returns:
* Movie Details
* TF-IDF Recommendations
* Genre Recommendations

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Technologies & Frameworks
### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge\&logo=react-router\&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge\&logo=shadcnui\&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide-F56565?style=for-the-badge\&logo=lucide\&logoColor=white)

### Backend
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge\&logo=python\&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge\&logo=fastapi\&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge\&logo=render\&logoColor=black)

### Machine Learning
![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge\&logo=pandas\&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge\&logo=numpy\&logoColor=white)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-F7931E?style=for-the-badge\&logo=scikit-learn\&logoColor=white)

### APIs & Deployment
![TMDB](https://img.shields.io/badge/TMDB-01D277?style=for-the-badge\&logo=themoviedatabase\&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-121013?style=for-the-badge\&logo=github\&logoColor=white)


<p align="right">(<a href="#readme-top">bac
k to top</a>)</p>

# Project Structure
```text
Movies
│
├── frontend/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   ├── runtime.txt
│   ├── movies_metadata.csv
│   ├── movies.ipynb
│   ├── df.pkl
│   ├── tfidf.pkl
│   ├── tfidf_matrix.pkl
│   └── indices.pkl
│
└── README.md
```
## Environment Variables
### Backend
This project uses the TMDB API for movie search, metadata retrieval, and genre-based recommendations.
1. Create an account at https://www.themoviedb.org/
2. Navigate to **Settings → API**
3. Generate an API Key
4. Create a `.env` file inside the `backend` folder:
```env
TMDB_API_KEY=YOUR_TMDB_API_KEY
```

### Frontend
Create a `.env` file inside the `frontend` folder:
```env
VITE_API_URL=http://127.0.0.1:8000
```

For production:
```env
VITE_API_URL=https://your-render-backend.on
render.com
```

# Installation
### Backend
```bash
cd backend

python -m venv venv
venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

### Frontend
```bash
cd frontend

npm install

npm run dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Deployment
### Frontend
* GitHub Pages

### Backend
* Render

> Note: The backend is hosted on Render's free tier and may take a few seconds to wake up after inactivity.

# Author
- [Jasmine](https://github.com/Jasz-rgb)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
