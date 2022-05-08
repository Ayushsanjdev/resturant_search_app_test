import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const searchApi = async (searchTerm) => {
    setLoader(true);
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
      setLoader(false);
      setError(false)
    } catch (err) {
      setError(true);
      setLoader(false);
    }
  };

  // Call search api when component is first rendered.
  useEffect(() => {
    // setLoader(true);
    searchApi();
  }, []);

  return [searchApi, results, error, loader, setLoader];
};
