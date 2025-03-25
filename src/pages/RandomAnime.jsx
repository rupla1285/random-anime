import Cards from "../components/Cards/Cards";
import { useAnime } from "../context/animeContext";
import "../components/Cards/Cards.css";
import { useEffect, useState } from "react";
import { getAnime } from "../api/getAnime";

function RandomAnime() {
  // const { animeList } = useAnime();
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    getAnime().then(setAnimeList)
  }, [])

  console.log("animeList" ,animeList);

  return (
    <div className="cardContainer">
      {animeList.map((anime) => (
          <Cards
            key={anime.mal_id}
            id={anime.mal_id}
            image={anime.images.jpg.image_url}
            title={anime.title}
          />
        ))}
    </div>
  );
}
export default RandomAnime;
