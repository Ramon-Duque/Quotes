import axios from "axios";
import { QuoteAndAuthor } from "../models/QuotesAndAuthors";

export const getQuotes = () => {
    return axios.get<QuoteAndAuthor[]>('https://grandcircusco.github.io/demo-apis/quotes.json')
};