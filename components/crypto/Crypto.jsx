import Link from "next/link";
import React, { useEffect, useState } from "react";
import Search from "../search/Search";
import CryptoDetails from "./CryptoDetails";
import ReactPaginate from "react-paginate";

const Crypto = ({ coins }) => {
  const [search, setSearch] = useState("");
  const [filteredCoins, setFilteredCoins] = useState([]);

 
//   pagination
const [pageNumber, setPageNumber] = useState(0);

// users per page
const usersPerPage = 10;
// pages visited
const pagesVisited = pageNumber * usersPerPage;

// page count
const pageCount = Math.ceil(filteredCoins.length / usersPerPage);
// page change
const changePage = ({ selected }) => {
  setPageNumber(selected);
};

const displayCoins = filteredCoins.slice(pagesVisited, pagesVisited + usersPerPage).map((coin, index) => (
    <>
     <CryptoDetails coin={coin} index={index} key={coin.id} />
    </>
  
))

// Search for coins when filtred
// conver the coin prop
// filter it and then pass the filtered coin int the pagination
useEffect(() => {
    setFilteredCoins(
      coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, coins]);

// passing this func into the search component and recieve it a a prop in the search comp jsx
  const handleSearch = (e) => {
    setSearch(e.target.value)
  };




  return (
    <section className="container mx-auto">
      <div>
        <Search value={search} onChange={handleSearch} />
      </div>

      <div className="my-5">
        <table className="w-full text-center">
          <thead className="text-xs bg-gray-900 md:text-sm capitalize">
            <tr className="text-center">
              <th className="border-r p-1">rank</th>
              <th className="border-r p-1">coin</th>
              <th className="border-r p-1">price</th>
              <th className="border-r p-1">24h change</th>
              <th className="">market cap</th>
            </tr>
          </thead>

          <tbody className="w-full">
            {displayCoins}
          </tbody>
        </table>

        <div className="flex my-10 items-center justify-center">
        <ReactPaginate
          previousLabel={"First"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"btns-container"}
          previousClassName={"prev-btn"}
          nextLinkClassName={"next-btn"}
          disabledClassName={"disabled-paginate"}
          activeClassName={"active-paginate"}
        />
      </div>

       
      </div>
    </section>
  );
};

export default Crypto;
