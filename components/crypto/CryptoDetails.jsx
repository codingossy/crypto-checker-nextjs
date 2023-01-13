import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import millify from "millify";
import ReactPaginate from "react-paginate";




export const formatNumbers = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  export const checkPrice = (p) => {
    const priceChange = Math.sign(p);
    if (priceChange === -1) {
      return "red";
    }
    return "green";
  };
  

const CryptoDetails = ( { coin, index }) => {


    // destructure
    const {id, icon, symbol, price, priceChange1d, rank, name, twitterUrl, websiteUrl, marketCap } = coin

  

  return (
    
       <>
         <tr className='w-full border hover:bg-red-500 text-center text-xs md:text-sm ' key={id} >
           <td className='p-2 text-start'>{rank}</td>
           <td ><Link href={'/coindetails/' + id } className='flex items-center gap-x-5 justify-center'><Image src={icon}  alt='coin image' width={20} height={20} />{symbol}</Link></td>
           <td className='p-2'>${millify(price.toFixed(2))}</td>
           <td className={checkPrice(priceChange1d)}>{priceChange1d}</td>
           <td className='p-2'>{millify(marketCap.toFixed(2))}</td>
        </tr>

       </>

  )
}

export default CryptoDetails