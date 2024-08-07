import { useEffect } from "react";
import { useState } from "react";

function ListagemNews() {
  // UseState dp reacter para gerenciar o estado
  const [news, setNews] = useState([]);

  // Hook useEfect para lidar com efeitos colaterais no componente
  useEffect(() => {
    fetch("http://localhost:7000/news")
        .then((response) => response.json())
        .then((data) => setNews(data))
  }, []);

  return (
    <div className="container mt-4">
        {news.map((user) => (
            <>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-tittle">{user.nome}</h5>
                    <p className="card-text"><strong>E-mail: </strong>{user.email}</p>
                </div>
            </div>
            </>
        ))}
    </div>
  );
}

export default ListagemNews;
