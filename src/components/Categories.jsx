import React from 'react'
import { ApiCategories } from '../apifolder/categoryApi'
import Category from './Category.jsx'

const Categories = () => {
    return (
        <div className='flex justify-between items-center p-5'>
            {
                ApiCategories.map((item, index) => {
                    return <Category item={item} key={index} />
                })
            }
        </div>
    )
}

export default Categories
