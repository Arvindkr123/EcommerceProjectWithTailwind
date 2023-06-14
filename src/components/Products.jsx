import React from 'react'
import Product from './Product.jsx'
import { ApiTopPropduct } from '../apifolder/productsApi'

const Products = () => {
    return (
        <div className='flex flex-wrap p-5 items-center justify-center m-2 flex-1'>
            {
                ApiTopPropduct.map((item, index) => {
                    return <Product key={index} item={item} />
                })
            }
        </div>
    )
}

export default Products
