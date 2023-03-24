import React from "react";

const SearchResults = ({ songs, selectSong }) => {
  return (
    <div className="fixed top-20 w-full md:w-1/2 min-w-[200px] text-yellow-500 text-base px-5 py-2 bg-gray-700 left-0 md:left-[20%] rounded-xl">
      {songs.length > 0 ? (
        <div>
          {songs.map((song) => {
            return (
              <div
                key={song.id}
                className="my-3 flex items-center bg-[#33373B] justify-evenly cursor-pointer  p-3 rounded-xl"
                onClick={()=>selectSong(song.id)}
              >
                <img src={song.image} alt="song img" className="block w-8" />
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.00001 0.333313C10.6744 0.333313 13.6667 3.32415 13.6667 7.00384C13.6667 10.6758 10.6744 13.6666 7.00001 13.6666C3.32562 13.6666 0.333344 10.6758 0.333344 7.00384C0.333344 3.32415 3.32562 0.333313 7.00001 0.333313ZM6.24068 4.35325C6.09911 4.35325 5.96397 4.38541 5.83527 4.44973C5.6744 4.53978 5.5457 4.68128 5.47491 4.84851C5.42987 4.96428 5.35908 5.3116 5.35908 5.31804C5.2883 5.69752 5.24969 6.31498 5.24969 6.99676C5.24969 7.64703 5.2883 8.23812 5.34621 8.62403C5.35265 8.63047 5.42343 9.0614 5.50065 9.20934C5.64222 9.47948 5.91893 9.64671 6.21494 9.64671H6.24068C6.43373 9.64028 6.83913 9.47305 6.83913 9.46661C7.52125 9.18361 8.86616 8.30244 9.4067 7.71714L9.44531 7.67854C9.5161 7.60779 9.60619 7.49845 9.62549 7.47272C9.72845 7.33765 9.77993 7.17042 9.77993 7.00384C9.77993 6.81667 9.72202 6.64301 9.61262 6.50151C9.58688 6.47578 9.49036 6.36644 9.40027 6.27639C8.8726 5.71038 7.4955 4.78419 6.77478 4.50119C6.66539 4.45681 6.38868 4.35968 6.24068 4.35325Z"
                    fill="#FACD66"
                  />
                </svg>
                <p>
                  {song.artist} ~ {song.title}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No result</p>
      )}
    </div>
  );
};

export default SearchResults;
