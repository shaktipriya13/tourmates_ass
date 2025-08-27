import React from 'react';
import SearchView from '../ui/SearchView';

const Header = () => {
  return (
    <header className="w-full bg-header-1 px-4 sm:px-6 lg:px-9 py-4">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          {/* Greeting Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-[2px]">
            <span className="text-[16px] sm:text-[20px] font-plus-jakarta font-semibold leading-[20px] sm:leading-[26px] text-global-5">
              Hello
            </span>
            <span className="text-[16px] sm:text-[20px] font-plus-jakarta font-semibold leading-[20px] sm:leading-[26px] text-global-5 ml-1">
              Alka ,
            </span>
            <span className="text-[12px] sm:text-[14px] font-plus-jakarta font-normal leading-[16px] sm:leading-[18px] text-header-1 sm:self-end sm:ml-2">
              Good Morning
            </span>
          </div>

          {/* Search and Notification Section */}
          <div className="flex items-center gap-3 w-full sm:w-auto sm:max-w-[300px]">
            <div className="flex-1 sm:flex-initial sm:w-[240px]">
              <SearchView
                placeholder="Search"
                leftImage={{
                  src: "/images/img_searchnormal.svg",
                  width: 24,
                  height: 24
                }}
                onChange={() => {}}
              />
            </div>
            
            {/* Notification Button */}
            <button className="bg-header-1 rounded-[8px] p-3 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <img 
                src="/images/img_group_1597884850.svg" 
                alt="notifications" 
                className="w-[24px] h-[24px]"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;