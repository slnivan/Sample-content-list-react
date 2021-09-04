import { useCallback, useState } from "react";

export const useLoadContent = () => {
  const [imgList, setImgList] = useState([]);
  const [response, setResponse] = useState({
    url: "https://rickandmortyapi.com/api/character/?page=2",
    count: 21,
  });

  const getContent = useCallback(
    async (input) => {
      /* TODO: fetch images from this url: https://rickandmortyapi.com/api/character/
      (to fetch with name add name in search query: https://rickandmortyapi.com/api/character/?name=rick)
    */
      if (input) {
        let url = `https://rickandmortyapi.com/api/character/?name=${input}`;
        let res = await fetch(url);
        let json = await res.json();
        setImgList(json.results);
        setResponse(() => {
          return {
            url: json.info.next,
            count: json.info.count,
          };
        });
      } else {
        let url = `https://rickandmortyapi.com/api/character/`;
        let res = await fetch(url);
        let json = await res.json();
        setResponse(() => {
          return {
            url: json.info.next,
            count: json.info.count,
          };
        });
        setImgList((prevState) => {
          return [...prevState, ...json.results];
        });
      }
    },
    [setImgList, setResponse]
  );

  // TODO: Put fetchMore method here
  const fetchMore = useCallback(async () => {
    let res = await fetch(response.url);
    let json = await res.json();
    setImgList((prevState) => {
      return [...prevState, ...json.results];
    });
    setResponse(() => {
      return {
        url: json.info.next,
        count: json.info.count,
      };
    });
  }, [setImgList, setResponse, response]);

  return [imgList, getContent, fetchMore, response];
};
