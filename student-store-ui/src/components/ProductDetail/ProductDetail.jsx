import "./ProductDetail.css"
import ProductView from "../ProductView/ProductView"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import NotFound from "../NotFound/NotFound"

export default function ProductDetail() {

const [product, setProduct] = useState(null)
const {productId} = useParams();
const [loading, setLoading] = useState(true);

useEffect(() => {
    axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
    .then((response) => {
      setProduct(response.data.product)
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);
    })
  }, [productId])

  if (loading) {
    return (
    <h1 className="loading">Loading...</h1>
    )
  }

    return (
        <div className="product-detail">
            {product ? (
            <ProductView product={product} productId={productId} showDescription={true}/>
            ) : <NotFound />}
        </div>
    )
}