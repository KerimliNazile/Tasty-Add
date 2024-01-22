import React, { useEffect, useState } from 'react'
import Card from '../Card'

const Products = () => {
    const [product, setProducts] = useState([])
    async function getProduct() {
        const data = await fetch("http://localhost:5000/deps")
        const res = await data.json()
        setProducts(res)
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div>

            <section id='Products'>
                <div className="ProductsArea">
                    <div className="BoxArea">
                        {product && product.map((item) => (
                            <div className="CardIn">
                                <Card key={item._id} id={item._id} image={item.image} text={item.text} info={item.info} price={item.price} product={item}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products