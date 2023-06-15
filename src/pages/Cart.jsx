import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import NewsLatter from '../components/NewsLatter'
import Footer from '../components/Footer'
import Counter from '../components/Counter'

function Cart() {
    return (
        <div>
            <Announce />
            <Navbar />
            <div className='p-5'>
                <div className='flex justify-center text-5xl'>Cart</div>
                <div className='flex items-center justify-between mt-4'>
                    <button className='btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:bg-white'>Continue Shopping</button>
                    <div className='flex underline text-lg hover:cursor-pointer'>
                        <p>Items in your Cart : 3</p>
                        <p className='ml-5'>Wishlist Item : 0 </p>
                    </div>
                    <button className='btn'>Checkout</button>
                </div>
                <div className='flex mt-7'>
                    <div className='flex flex-col flex-1'>
                        {/* List of products */}
                        <div className='flex w-full h-auto items-center '>
                            <div className='product flex selef-start pl-5'>
                                {/* product desc */}
                                <img
                                    className="w-[7.2rem] h-[80%] rounded-lg shadow-lg  hover:scale-[1.1] ease-in duration-300 "
                                    src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                                    alt="product_img"
                                />
                                <div className='description flex flex-col ml-5 mt-3 h-auto justify-between'>
                                    <p>
                                        <b className='mr-2'>ID : </b> 12232332
                                    </p>
                                    <p>
                                        <b className='mr-2'>Product : </b>Dazzing Sky Shirt
                                    </p>
                                    <p className='flex items-center justify-start'>
                                        <b className='mr-2'>Color : </b>
                                        <div className='rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px] '></div>
                                    </p>
                                    <p>
                                        <b className='mr-2'>Size : </b>Lg
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center flex-auto'>
                                <Counter />
                                <p className={`flex justify-center items-center text-4xl mt-3`}>
                                    <b className='mr-2'>Price : $70 </b>Lg
                                </p>
                            </div>
                        </div>
                        <hr className='my-7' />
                        <div className='flex w-full h-auto items-center '>
                            <div className='product flex selef-start pl-5'>
                                {/* product desc */}
                                <img
                                    className="w-[7.2rem] h-[80%] rounded-lg shadow-lg  hover:scale-[1.1] ease-in duration-300 "
                                    src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                                    alt="product_img"
                                />
                                <div className='description flex flex-col ml-5 mt-3 h-auto justify-between'>
                                    <p>
                                        <b className='mr-2'>ID : </b> 12232332
                                    </p>
                                    <p>
                                        <b className='mr-2'>Product : </b>Dazzing Sky Shirt
                                    </p>
                                    <p className='flex items-center justify-start'>
                                        <b className='mr-2'>Color : </b>
                                        <div className='rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px] '></div>
                                    </p>
                                    <p>
                                        <b className='mr-2'>Size : </b>Lg
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center flex-auto'>
                                <Counter />
                                <p className={`flex justify-center items-center text-4xl mt-3`}>
                                    <b className='mr-2'>Price : $70 </b>Lg
                                </p>
                            </div>
                        </div>
                        <hr className='my-7' />
                        <div className='flex w-full h-auto items-center '>
                            <div className='product flex selef-start pl-5'>
                                {/* product desc */}
                                <img
                                    className="w-[7.2rem] h-[80%] rounded-lg shadow-lg  hover:scale-[1.1] ease-in duration-300 "
                                    src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                                    alt="product_img"
                                />
                                <div className='description flex flex-col ml-5 mt-3 h-auto justify-between'>
                                    <p>
                                        <b className='mr-2'>ID : </b> 12232332
                                    </p>
                                    <p>
                                        <b className='mr-2'>Product : </b>Dazzing Sky Shirt
                                    </p>
                                    <p className='flex items-center justify-start'>
                                        <b className='mr-2'>Color : </b>
                                        <div className='rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px] '></div>
                                    </p>
                                    <p>
                                        <b className='mr-2'>Size : </b>Lg
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center flex-auto'>
                                <Counter />
                                <p className={`flex justify-center items-center text-4xl mt-3`}>
                                    <b className='mr-2'>Price : $70 </b>Lg
                                </p>
                            </div>
                        </div>
                        <hr className='my-7' />
                        <div className='flex w-full h-auto items-center '>
                            <div className='product flex selef-start pl-5'>
                                {/* product desc */}
                                <img
                                    className="w-[7.2rem] h-[80%] rounded-lg shadow-lg  hover:scale-[1.1] ease-in duration-300 "
                                    src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                                    alt="product_img"
                                />
                                <div className='description flex flex-col ml-5 mt-3 h-auto justify-between'>
                                    <p>
                                        <b className='mr-2'>ID : </b> 12232332
                                    </p>
                                    <p>
                                        <b className='mr-2'>Product : </b>Dazzing Sky Shirt
                                    </p>
                                    <p className='flex items-center justify-start'>
                                        <b className='mr-2'>Color : </b>
                                        <div className='rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px] '></div>
                                    </p>
                                    <p>
                                        <b className='mr-2'>Size : </b>Lg
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center flex-auto'>
                                <Counter />
                                <p className={`flex justify-center items-center text-4xl mt-3`}>
                                    <b className='mr-2'>Price : $70 </b>Lg
                                </p>
                            </div>
                        </div>
                        <hr className='my-7' />
                        <div className='flex w-full h-auto items-center '>
                            <div className='product flex selef-start pl-5'>
                                {/* product desc */}
                                <img
                                    className="w-[7.2rem] h-[80%] rounded-lg shadow-lg  hover:scale-[1.1] ease-in duration-300 "
                                    src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                                    alt="product_img"
                                />
                                <div className='description flex flex-col ml-5 mt-3 h-auto justify-between'>
                                    <p>
                                        <b className='mr-2'>ID : </b> 12232332
                                    </p>
                                    <p>
                                        <b className='mr-2'>Product : </b>Dazzing Sky Shirt
                                    </p>
                                    <p className='flex items-center justify-start'>
                                        <b className='mr-2'>Color : </b>
                                        <div className='rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px] '></div>
                                    </p>
                                    <p>
                                        <b className='mr-2'>Size : </b>Lg
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center flex-auto'>
                                <Counter />
                                <p className={`flex justify-center items-center text-4xl mt-3`}>
                                    <b className='mr-2'>Price : $70 </b>Lg
                                </p>
                            </div>
                        </div>
                        <hr className='my-7' />
                    </div>
                    <div className='p-5 flex-[0.4] w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg flex items-center flex-col'>
                        <h1 className='text-4xl'>Summary</h1>
                        <div className='flex justify-between mt-3 w-full'>
                            <p>SubTotal</p>
                            <p>$140</p>
                        </div>
                        <div className='flex justify-between mt-3 w-full'>
                            <p>Shipping</p>
                            <p>$40</p>
                        </div>
                        <div className='flex justify-between mt-3 w-full'>
                            <p>Shipping Discount</p>
                            <p>$40</p>
                        </div>
                        <div className='flex justify-between mt-3 w-full text-3xl font-bold'>
                            <p>Total</p>
                            <p>$40</p>
                        </div>
                    </div>
                </div>
            </div>
            <NewsLatter />
            <Footer />
        </div>
    )
}

export default Cart
