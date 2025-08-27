import React from 'react';
import PropTypes from 'prop-types';

const SearchView = ({ 
  placeholder = "Search", 
  value = "", 
  onChange, 
  leftImage,
  className = "",
  ...props 
}) => {
  const baseClasses = "relative w-full";
  
  return (
    <div className={`${baseClasses} ${className}`}>
      <div className="relative">
        {leftImage && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
            <img 
              src={leftImage?.src} 
              alt="search" 
              className={`w-[${leftImage?.width}px] h-[${leftImage?.height}px]`}
            />
          </div>
        )}
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-global-5 border border-[#00000007] rounded-[6px] pt-[12px] pr-[12px] pb-[12px] pl-[48px] text-[12px] font-plus-jakarta font-normal leading-[16px] text-left text-searchview-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          {...props}
        />
      </div>
    </div>
  );
};

SearchView.propTypes = {
  placeholder: PropTypes?.string,
  value: PropTypes?.string,
  onChange: PropTypes?.func,
  leftImage: PropTypes?.shape({
    src: PropTypes?.string,
    width: PropTypes?.number,
    height: PropTypes?.number
  }),
  className: PropTypes?.string,
};

export default SearchView;