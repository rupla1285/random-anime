import "./details.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleAnime } from "../api/getSingleAnime";

function AnimeDetails() {
  const { id } = useParams();
  const [animeDetail, setAnimeDetail] = useState({
    mal_id: "",
    title: "",
    images: { jpg: { image_url: "" } },
  });

  useEffect(() => {
    getSingleAnime(id).then(setAnimeDetail);
  }, [id]);

  return (
    <div className="detailContainer">
      <div className="detailPage">
        <div className="detailLeft">
          <img src={animeDetail.images.jpg.image_url} alt={animeDetail.title} />
        </div>
        <div className="detailRight">{animeDetail.title}</div>
      </div>
    </div>
  );
}
export default AnimeDetails;
