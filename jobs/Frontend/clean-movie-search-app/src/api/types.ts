export interface Movie {
  id: number;
  title: string;
  overview: string;
  // There may be no poster
  poster_path: string | null;
  release_date: string;
  vote_average: number;
}

export interface MovieSearchResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
