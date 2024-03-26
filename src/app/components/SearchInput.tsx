import React from 'react'


// Haku inputti.
// EI TOIMI KÄYTÄNNÖSSÄ VIELÄ!
const SearchInput = () => {
  return (
    <form>
    <div className="flexCenter py-5">
      <div className="flex">
        <input
              className="block  border w-60 sm:w-[500px] sm:h-[50px]
              border-gray-200 py-[9px] pl-5 text-xl outline-2 
              placeholder:text-gray-500 rounded-l-lg text-black "
              placeholder="Mitä etsit?"
                />
                {/* HAE NAPPI */}
              <button
                type="submit"
                className="bg-amber-600 peer py-[9px] rounded-r-lg
                flex items-center justify-center p-4 " 
                >       
                <div className="m-auto">
                  <svg className="w-4 h-4 text-white-400 dark:text-white-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
              </button>
      </div>

      </div>
    </form>
  )
}

export default SearchInput
