import React, { useEffect, useState } from "react";
import { Category } from "../Category";
import { Lista, Item } from "./Styles";

const UseCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window
      .fetch("https://petgram-server.midudev.now.sh/categories")
      .then(res => res.json())
      .then(response => {
        setCategories(response);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
};

export const ListOfCategories = () => {
  const { categories, loading } = UseCategoriesData();

  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);
  const renderList = fixed => (
    <Lista className={fixed ? "fixed" : ""}>
      {loading ? (
        <Item key="loading">
          <Category />
        </Item>
      ) : (
        categories.map(cat => (
          <Item key={cat.id}>
            <Category {...cat} path={`/pet/${cat.id}`}/>
          </Item>
        ))
      )}
    </Lista>
  );

  if (loading) {
    return "Cargando...";
  }

  return (
    <React.Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </React.Fragment>
  );
};
