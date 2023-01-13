import Image from 'next/image';
import React from 'react'
import Layout from '../../components/layout/Layout'
import millify from 'millify';
import { checkPrice } from '../../components/crypto/CryptoDetails';





const CoinInfo = ( { coin }) => {

  const {
    id,
    icon,
    name,
    symbol,
    price,
    priceChange1d,
    priceChange1h,
    priceChange1w,
    marketCap,
    totalSupply,
    websiteUrl,
    rank,
    twitterUrl,
  } = coin.coin;

  console.log(coin);
  



  return (
    <Layout>
      <div className='container mx-auto my-20 bg-gray-900 p-4 w-full'>
        <h1 className='text-2xl text-white text-center uppercase font-semibold'>crypto information</h1>

        <div className='my-10'>
            <div className='flex items-center justify-center w-full'>
              <div className='bg-gray-900 p-4 flex items-center gap-x-5'>
              <h1>{name}</h1>

                <Image 
                  alt='cypto image icon'
                  src={icon}
                  width={50}
                  height={50}
                />
                <p>{symbol}</p>
              </div>
            </div>
        </div>

        <div className='flex items-center w-full justify-center bg-white p-4'>
          <div className='flex items-center w-full justify-center text-black'>
            <div className='border w-full md:w-2/4 border-gray-500 shadow-2xl p-4'>
                <div className=''>
                <h4 className='flex gap-x-4 items-center capitalize'>
                  <span>Name:</span>
                  <span className='font-semibold text-blue-700'>{name}</span>
                </h4>

                <h4 className='flex gap-x-4 items-center capitalize'>
                  <span>price:</span>
                  <span>${millify(price.toFixed(2))}</span>
                </h4>
                <h4 className='flex gap-x-4 items-center capitalize'>
                  <span>rank:</span>
                  <span>Number {rank}</span>
                </h4>
                </div>

                <div className='my-4 border p-4'>
                  <ul>
                    <li className='flex justify-between capitalize border p-2 my-2'>
                      <span>1hr change:</span>
                      <span className={checkPrice(priceChange1h)}>
                    {priceChange1h}
                      </span>
                    </li>

                    <li className='flex justify-between capitalize border p-3 my-2'>
                      <span>24hr change:</span>
                      <span className={checkPrice(priceChange1d)}>
                    {priceChange1d}
                       </span>
                    </li>
                    <li className='flex justify-between capitalize border p-3 my-2'>
                      <span>1week change:</span>
                      <span className={checkPrice(priceChange1w)}>
                    {priceChange1w}
                  </span>
                    </li>

                    <li className='flex justify-between capitalize border p-3 my-2'>
                      <span>market cap</span>
                      <span>${millify(marketCap.toFixed(2))}</span>
                    </li>

                    <li className='flex justify-between capitalize border p-3 my-2'>
                      <span>total supply</span>
                      <span>{millify(totalSupply)}</span>
                    </li>
                    <li className='flex justify-between capitalize border p-3 my-2'>
                      <span>website</span>
                      <span>
                        <a 
                        href={websiteUrl}
                        target='_blank'
                        rel='noreferrer'
                         className='text-blue-500 lowercase'>
                          {websiteUrl}
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

// defining the amount of paths next js will create
// use same code from the initial index js call
// when crating dynamic paths
export const getStaticPaths = async () => {
  const response = await fetch(
    "https://api.coinstats.app/public/v1/coins?skip=0&limit=50"
  );
  const data = await response.json();

  const paths = data.coins.map((coin) => {
    return {
      params: {
        id: coin.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// to get a single coin 
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch("https://api.coinstats.app/public/v1/coins/" + id);
  const data = await response.json();

  return {
    props: {
      coin: data,
    },
  };
};

export default CoinInfo