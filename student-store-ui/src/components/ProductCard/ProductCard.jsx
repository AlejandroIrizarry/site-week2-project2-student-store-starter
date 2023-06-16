import { Link } from "react-router-dom"
import codepath from "../../assets/codepath.svg"
import Star from "../../Icons/Star.jsx"
import "./ProductCard.css"
import HalfStar from "../../Icons/HalfStar";
import { useState } from "react"

export default function ProductCard({product, productId, handleAddItemToCart, handleRemoveItemToCart, showDescription}) {
    
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

        const [quantity, setQuantity]= useState(0)

        const increment = () => {
            setQuantity(quantity + 1)
        }

        const reduce = () => {
            if(quantity > 0)
                setQuantity(quantity - 1)
        }
    
    return (
        <div className="product-card">
            <div className="media">
                <Link to={`/products/${productId}`}>{product.image ? <img src={product.image} alt="product image" />: <img src={codepath} alt="product image"/>}</Link>
            </div>
            <div className="product-info">
                <div className="product-info">
                    <div className="main-info">
                        <p className="product-name">
                            {product.name}
                        </p>
                        <p className="product-price">{formatter.format(product.price)}</p>
                        <div className= "stars">
                            <Star fill="var(--star-color-filled)" />
                            <Star fill="var(--star-color-filled)" />
                            <Star fill="var(--star-color-filled)" />
                            <Star fill="var(--star-color-filled)" />
                            <HalfStar fill="var(--star-color-empty)"/>
                        </div>
                    </div>
                    <div className="desc">
                        <p className="product-description">{showDescription === false ? "": product.description}</p>
                    </div>
                    <div className="actions">
                        <div className="buttons">
                            <button className="add">
                                <i className="material-icons" onClick={increment}>
                                    add
                                </i>
                            </button>
                            <button className="remove">
                                <i className="material-icons" onClick={reduce}>
                                    remove
                                </i>
                            </button>
                        </div>

                        {quantity ? (
                            <span className="product-quantity">
                                <span className="amt">
                                    {quantity}
                                </span>
                            </span>
                        ) : null}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}