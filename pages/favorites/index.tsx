import { useState, useEffect } from "react";
import { Layout } from "../../components/layouts";
import { FavoritePokemons } from "../../components/pokemon/";
import NoFavorites from "../../components/ui/NoFavorites";
import { localFavorites } from "../../utils";

const Favorites = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favorites">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default Favorites;
