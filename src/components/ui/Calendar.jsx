import React, { useState, useCallback, useMemo } from 'react';
import Button from './Button';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  // Get current month and year
  const currentMonth = currentDate?.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate?.getFullYear();

  // Week days
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  // Get days in month
  const getDaysInMonth = useCallback((date) => {
    const year = date?.getFullYear();
    const month = date?.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay?.getDate();
    const startingDayOfWeek = firstDay?.getDay();

    const days = [];

    // Add days from previous month
    const prevMonth = new Date(year, month - 1, 0);
    const prevMonthDays = prevMonth?.getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days?.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthDays - i)
      });
    }

    // Add days from current month
    for (let day = 1; day <= daysInMonth; day++) {
      days?.push({
        day,
        isCurrentMonth: true,
        date: new Date(year, month, day)
      });
    }

    // Add days from next month to fill the grid
    const totalCells = 42; // 6 rows × 7 days
    const remainingCells = totalCells - days?.length;
    for (let day = 1; day <= remainingCells; day++) {
      days?.push({
        day,
        isCurrentMonth: false,
        date: new Date(year, month + 1, day)
      });
    }

    return days?.slice(0, totalCells);
  }, []);

  // Get calendar days
  const calendarDays = useMemo(() => getDaysInMonth(currentDate), [currentDate, getDaysInMonth]);

  // Check if a date is selected (start, end, or in between)
  const isDateSelected = useCallback((date) => {
    if (!selectedStartDate) return false;
    
    const dateTime = date?.getTime();
    const startTime = selectedStartDate?.getTime();
    
    if (!selectedEndDate) {
      return dateTime === startTime;
    }
    
    const endTime = selectedEndDate?.getTime();
    const minTime = Math.min(startTime, endTime);
    const maxTime = Math.max(startTime, endTime);
    
    return dateTime >= minTime && dateTime <= maxTime;
  }, [selectedStartDate, selectedEndDate]);

  // Check if a date is start or end date
  const isDateEdge = useCallback((date) => {
    if (!selectedStartDate) return false;
    
    const dateTime = date?.getTime();
    const startTime = selectedStartDate?.getTime();
    
    if (!selectedEndDate) {
      return dateTime === startTime;
    }
    
    const endTime = selectedEndDate?.getTime();
    return dateTime === startTime || dateTime === endTime;
  }, [selectedStartDate, selectedEndDate]);

  // Handle date click
  const handleDateClick = useCallback((date, isCurrentMonth) => {
    if (!isCurrentMonth) return;

    if (!selectedStartDate) {
      // First selection
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    } else if (!selectedEndDate) {
      // Second selection
      if (date?.getTime() === selectedStartDate?.getTime()) {
        // Same date clicked, deselect
        setSelectedStartDate(null);
      } else {
        setSelectedEndDate(date);
      }
    } else {
      // Start new selection
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    }
  }, [selectedStartDate, selectedEndDate]);

  // Navigate months
  const navigateMonth = useCallback((direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate?.setMonth(prev?.getMonth() + direction);
      return newDate;
    });
  }, []);

  // Reset selection
  const handleReset = useCallback(() => {
    setSelectedStartDate(null);
    setSelectedEndDate(null);
  }, []);

  // Format selected date range
  const formatDateRange = useCallback(() => {
    if (!selectedStartDate) return '';
    
    const formatDate = (date) => {
      let day = date?.getDate();
      const month = date?.toLocaleString('default', { month: 'short' });
      
      const getOrdinal = (n) => {
        const suffix = ['th', 'st', 'nd', 'rd'];
        const v = n % 100;
        return n + (suffix?.[(v - 20) % 10] || suffix?.[v] || suffix?.[0]);
      };
      
      return `${getOrdinal(day)} ${month}.`;
    };
    
    if (!selectedEndDate) {
      return formatDate(selectedStartDate);
    }
    
    // Sort dates to ensure proper order
    const start = selectedStartDate?.getTime() <= selectedEndDate?.getTime() ? selectedStartDate : selectedEndDate;
    const end = selectedStartDate?.getTime() <= selectedEndDate?.getTime() ? selectedEndDate : selectedStartDate;
    
    return `${formatDate(start)} - ${formatDate(end)}`;
  }, [selectedStartDate, selectedEndDate]);

  // Group days into weeks
  const weeks = useMemo(() => {
    const weeksArray = [];
    for (let i = 0; i < calendarDays?.length; i += 7) {
      weeksArray?.push(calendarDays?.slice(i, i + 7));
    }
    return weeksArray;
  }, [calendarDays]);

  return (
    <div className="w-full bg-global-5 border border-global-2 rounded-[12px] p-[14px]">
      {/* Calendar Header */}
      <div className="flex flex-row justify-between items-center px-[14px] lg:px-[24px] mb-[14px]">
        <h3 className="text-[16px] font-plus-jakarta font-bold leading-[21px] text-left text-global-1">
          Calendar
        </h3>
        {/* <Button
          variant="outline"
          size="small"
          leftImage={{
            src: "/images/img_rotateleft.svg",
            width: 24,
            height: 24
          }}
          className="text-[12px] font-plus-jakarta font-normal leading-[16px] tracking-[2px] text-center text-global-1"
          onClick={handleReset}
        >
          RESET
        </Button> */}
        <Button
  variant="outline"
  size="small"
  leftImage={{
    src: "/images/img_rotateleft.svg",
    width: 24,
    height: 24
  }}
  className="flex items-center gap-[8px] text-[12px] font-plus-jakarta font-normal leading-[16px] tracking-[2px] text-global-1"
  onClick={handleReset}
>
  RESET
</Button>

      </div>
      <div className="w-full h-[1px] bg-global-3 mb-[18px]"></div>
      {/* Month/Year Navigation */}
      <div className="flex flex-row justify-between items-center px-[24px] mb-[22px]">
        <div className="flex flex-row justify-start items-center flex-1">
          <p className="text-[16px] font-plus-jakarta font-semibold leading-[21px] text-left text-global-5">
            {currentMonth}
          </p>
          <p className="text-[16px] font-plus-jakarta font-semibold leading-[21px] text-left text-global-5 ml-[10px]">
            {currentYear}
          </p>
        </div>
        <div className="flex flex-row justify-end items-center gap-[40px]">
          <button onClick={() => navigateMonth(-1)} className="cursor-pointer">
            <img 
              src="/images/img_arrow_up_blue_gray_900.svg" 
              alt="previous" 
              className="w-[24px] h-[24px] transform rotate-180"
            />
          </button>
          <button onClick={() => navigateMonth(1)} className="cursor-pointer">
            <img 
              src="/images/img_arrow_up_blue_gray_900.svg" 
              alt="next" 
              className="w-[24px] h-[24px]"
            />
          </button>
        </div>
      </div>
      {/* Calendar Grid */}
      <div className="flex flex-col justify-start items-center px-[36px] lg:px-[40px] pb-[20px]">
        {/* Week Days Header */}
        <div className="flex flex-row justify-between items-center w-full mb-[22px]">
          {weekDays?.map((day, index) => (
            <p key={index} className="text-[16px] font-plus-jakarta font-normal leading-[21px] text-left text-global-6 w-[32px] text-center">
              {day}
            </p>
          ))}
        </div>

        {/* Calendar Weeks */}
        <div className="flex flex-col gap-[12px] w-full">
          {weeks?.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-row justify-between items-center w-full">
              {week?.map((dayObj, dayIndex) => {
                const isSelected = isDateSelected(dayObj?.date);
                const isEdge = isDateEdge(dayObj?.date);
                const isInRange = isSelected && !isEdge;
                
                return (
                  <div key={dayIndex} className="relative w-[32px] h-[32px] flex items-center justify-center">
                    {isInRange && (
                      <div className="absolute inset-0 bg-global-2 border-t border-b border-[#919ef3]"></div>
                    )}
                    

                    <button
                      onClick={() => handleDateClick(dayObj?.date, dayObj?.isCurrentMonth)}
                      className={`
                        w-[32px] h-[32px] flex items-center justify-center rounded-[20px] text-[16px] font-plus-jakarta font-medium leading-[21px] text-center transition-all duration-200 relative z-10
                        ${dayObj?.isCurrentMonth 
                          ? (isEdge 
                              ? 'bg-button-2 text-button-2 hover:bg-[#5a4df0]' 
                              : 'text-global-2 hover:bg-gray-100'
                            )
                          : 'text-global-10 cursor-default'
                        }
                      `}
                      disabled={!dayObj?.isCurrentMonth}
                    >
                      {dayObj?.day}
                    </button>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Selected Date Range Display */}
        {selectedStartDate && (
          <div className="w-full mt-[20px] pt-[20px] border-t border-global-2">
            <p className="text-[16px] font-plus-jakarta font-semibold leading-[21px] text-left text-global-4">
              {formatDateRange()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Expose formatDateRange as a static method for use in parent components
Calendar.formatDateRange = (startDate, endDate) => {
  if (!startDate) return '';

  const formatDate = (date) => {
    let day = date?.getDate();
    const month = date?.toLocaleString('default', { month: 'short' });
    
    const getOrdinal = (n) => {
      const suffix = ['th', 'st', 'nd', 'rd'];
      const v = n % 100;
      return n + (suffix?.[(v - 20) % 10] || suffix?.[v] || suffix?.[0]);
    };
    
    return `${getOrdinal(day)} ${month}.`;
  };
  
  if (!endDate) {
    return formatDate(startDate);
  }
  
  // Sort dates to ensure proper order
  const start = startDate?.getTime() <= endDate?.getTime() ? startDate : endDate;
  const end = startDate?.getTime() <= endDate?.getTime() ? endDate : startDate;
  
  return `${formatDate(start)} - ${formatDate(end)}`;
};

export default Calendar;