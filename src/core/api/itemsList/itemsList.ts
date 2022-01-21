import axios from "axios";


const ItemsListApi = () =>
  axios
    .get(
      `https://systemapi.prod.ashish.me/books`
    )
    .then(result => {
      return result.data;
    });

export default ItemsListApi;
