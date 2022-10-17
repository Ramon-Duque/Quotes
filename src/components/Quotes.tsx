import React, { useEffect, useState } from "react";
import { getQuotes } from "../services/Quotes";
import { QuoteAndAuthor } from "../models/QuotesAndAuthors";
import "./Quotes.css";

function Quotes() {
  const [quotes, setQuotes] = useState<QuoteAndAuthor[]>([]);

  useEffect(() => {
    getQuotes().then((res) => {
      setQuotes(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <table>
      <tr>
        <th>Author</th>
        <th>Quote</th>
      </tr>
      {quotes.map((quote) => (
        <tr>
          <td>
            <h3>{quote.author}:</h3>
          </td>
          <td>
            <p>"{quote.text}"</p>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default Quotes;
