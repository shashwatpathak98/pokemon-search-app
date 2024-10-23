import React, { useState } from "react";

const PokeList = ({ response, pagination, pageNumber }) => {
  return (
    <div className=" flex flex-col gap-5 bg-gray-100 p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {response.results.map((res, idx) => (
          <div
            className="border border-1 border-gray-400 shadow-md  hover:shadow-lg hover:cursor-pointer p-3 flex flex-col items-center justify-center text-2xl rounded-md transition transform hover:scale-95"
            key={idx}
          >
            <a
              href={`https://pokemondb.net/pokedex/${res.name}`}
              target="_blank"
            >
              <img
                className="object-cover"
                height={200}
                width={200}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                  pageNumber * 20 + idx + 1
                }.svg`}
                alt="pokemon image"
              />
            </a>

            <span className="capitalize"> {res.name}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-around flex-1">
        <a
          className="bg-green-200 text-xl rounded p-3 border border-1 border-green-700 hover:border-green-500 hover:bg-green-100 hover:cursor-pointer"
          onClick={() => pagination(response.previous, false)}
        >
          ← Prev
        </a>
        <a
          className="bg-green-200 text-xl rounded p-3 border border-1 border-green-700 hover:border-green-500 hover:bg-green-100 hover:cursor-pointer"
          onClick={() => pagination(response.next, true)}
        >
          Next →
        </a>
      </div>
    </div>
  );
};

export default PokeList;
