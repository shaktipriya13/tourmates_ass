import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';
import Calendar from '../../components/ui/Calendar';

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(1);
  const [currentMonth, setCurrentMonth] = useState('September');
  const [currentYear, setCurrentYear] = useState('2025');
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { icon: '/images/img_apps.svg', label: 'Dashboard', active: true },
    { icon: '/images/img_people.svg', label: 'All Employees', active: false },
    { icon: '/images/img_cloud_change.svg', label: 'All Departments', active: false },
    { icon: '/images/img_calendar.svg', label: 'Attendance', active: false },
    { icon: '/images/img_dollar_circle.svg', label: 'Payroll', active: false },
    { icon: '/images/img_bag_2.svg', label: 'Jobs', active: false },
    { icon: '/images/img_profile_2user.svg', label: 'Candidates', active: false },
    { icon: '/images/img_document.svg', label: 'Leaves', active: false },
    { icon: '/images/img_clipboard_tick.svg', label: 'Holiday', active: false },
    { icon: '/images/img_setting.svg', label: 'Settings', active: false },
  ];

  const calendarDays = [
    { day: 31, isCurrentMonth: false },
    { day: 1, isCurrentMonth: true, isSelected: true },
    { day: 2, isCurrentMonth: true },
    { day: 3, isCurrentMonth: true },
    { day: 4, isCurrentMonth: true, isSelected: true },
    { day: 5, isCurrentMonth: true },
    { day: 6, isCurrentMonth: true },
    { day: 7, isCurrentMonth: true },
    { day: 8, isCurrentMonth: true },
    { day: 9, isCurrentMonth: true },
    { day: 10, isCurrentMonth: true },
    { day: 11, isCurrentMonth: true },
    { day: 12, isCurrentMonth: true },
    { day: 13, isCurrentMonth: true },
    { day: 14, isCurrentMonth: true },
    { day: 15, isCurrentMonth: true },
    { day: 16, isCurrentMonth: true },
    { day: 17, isCurrentMonth: true },
    { day: 18, isCurrentMonth: true },
    { day: 19, isCurrentMonth: true },
    { day: 20, isCurrentMonth: true },
    { day: 21, isCurrentMonth: true },
    { day: 22, isCurrentMonth: true },
    { day: 23, isCurrentMonth: true },
    { day: 24, isCurrentMonth: true },
    { day: 25, isCurrentMonth: true },
    { day: 26, isCurrentMonth: true },
    { day: 27, isCurrentMonth: true },
    { day: 28, isCurrentMonth: true },
    { day: 29, isCurrentMonth: true },
    { day: 30, isCurrentMonth: true },
    { day: 1, isCurrentMonth: false },
    { day: 2, isCurrentMonth: false },
    { day: 3, isCurrentMonth: false },
    { day: 4, isCurrentMonth: false },
  ];

  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  return (
    <div className="w-full bg-global-5 flex flex-col justify-start items-center">
      <div className="w-full flex flex-col lg:flex-row mt-[10px] mx-[10px] lg:mx-[30px] mb-0 gap-4 lg:gap-0">
        {/* Sidebar */}
        <div className="w-full lg:w-[20%] flex flex-col justify-start">
          <div className="w-full bg-global-4 rounded-[14px] p-[12px] lg:p-[20px] mb-[20px] lg:mb-[30px]">
            {/* Logo Section */}
            <div className="flex flex-col justify-start items-start mb-[30px] px-[16px]">
              <h1 className="text-[20px] font-segoe-ui font-bold leading-[27px] text-left text-global-3">
                Cortex
              </h1>
              <p className="text-[14px] font-poppins font-normal leading-[21px] text-left text-global-7">
                Human Resources
              </p>
            </div>

            {/* User Profile Section */}
            <div className="flex flex-row justify-start items-center mb-[20px] px-[16px]">
              <div className="flex flex-row gap-[10px] justify-start items-center flex-1">
                <img
                  src="/images/img_rectangle_39639.png"
                  alt="profile"
                  className="w-[34px] h-[34px] rounded-[16px]"
                />
                <div className="flex flex-col justify-start items-start flex-1">
                  <p className="text-[12px] font-poppins font-medium leading-[18px] text-left text-global-5">
                    Alka Singh
                  </p>
                  <p className="text-[10px] font-poppins font-normal leading-[15px] text-left text-global-7">
                    Head of Operations
                  </p>
                </div>
              </div>
              <img
                src="/images/img_angle_down.svg"
                alt="dropdown"
                className="w-[16px] h-[16px]"
              />
            </div>

            {/* Profile Menu Items */}
            <div className="flex flex-col gap-[12px] justify-start items-center pb-[16px]">
              <div className="w-full h-[1px] bg-global-1"></div>
              
              <div className="flex flex-row justify-start items-center px-[24px] w-full">
                <img
                  src="/images/img_system.svg"
                  alt="profile"
                  className="w-[24px] h-[24px] tint-[#919ef3]"
                />
                <p className="text-[12px] font-inter font-normal leading-[15px] text-left text-[#919ef3] ml-[16px]">
                  My Profile
                </p>
              </div>

              <div className="w-full h-[1px] bg-global-1"></div>

              <div className="flex flex-row justify-start items-center px-[24px] w-full">
                <img
                  src="/images/img_system_blue_100.svg"
                  alt="settings"
                  className="w-[24px] h-[24px] tint-[#919ef3]"
                />
                <p className="text-[12px] font-inter font-normal leading-[15px] text-left text-[#919ef3] ml-[16px]">
                  Settings
                </p>
              </div>

              <div className="w-full h-[1px] bg-global-1"></div>

              <div className="flex flex-row justify-start items-center px-[24px] w-full">
                <img
                  src="/images/img_logout.svg"
                  alt="logout"
                  className="w-[24px] h-[24px] tint-[#919ef3]"
                />
                <p className="text-[12px] font-inter font-normal leading-[15px] text-left text-[#919ef3] ml-[16px]">
                  Log Out
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="w-full px-[6px] hidden lg:block">
            <div className="w-full bg-global-6 py-[20px]">
              <div className="flex flex-col gap-[24px] justify-start items-start px-[40px]">
                {menuItems?.map((item, index) => (
                  // <div
                  //   key={index}
                  //   className={`flex flex-row justify-start items-center w-full py-2 cursor-pointer pl-[16px]  ${
                  //     activeItem === item.label ? 'border-l-[4px] border-solid border-[#919ef3] bg-global-6' : ''
                  //   }`}
                  //   onClick={() => setActiveItem(item.label)}
                  // >
                  <div
  className={`flex items-center w-full py-2 cursor-pointer ${
    activeItem === item.label
      ? 'border-l-[4px] border-solid border-[#919ef3] bg-global-6'
      : 'border-l-[4px] border-transparent'
  } pl-[16px]`}  // << key padding to create space
  onClick={() => setActiveItem(item.label)}
>
                    <img
                      src={item?.icon}
                      alt={item?.label}
                      className="w-[20px] lg:w-[24px] h-[20px] lg:h-[24px]"
                    />
                    <p className={`text-[14px] font-plus-jakarta font-semibold leading-[18px] text-left ml-[16px] ${
                      activeItem === item.label ? 'text-[#919ef3]' : 'text-global-8'
                    }`}>
                      {item?.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-[80%] flex flex-col justify-start items-center mt-[22px] lg:mt-0">
          {/* Header */}
          <Header />

          {/* Dashboard Content */}
          <div className="w-full flex flex-col lg:flex-row gap-[4px] justify-start items-start ml-[16px] lg:ml-0">
            {/* Stats Cards */}
            <div className="w-full lg:flex-1 flex flex-col justify-start items-center">
              <div className="w-full bg-global-5 p-[18px] lg:p-[22px] mb-[6px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] lg:gap-[32px] w-full">
                  {/* Total Employee Card */}
                  <div className="bg-global-5 border border-global-2 rounded-[8px] p-[8px] lg:p-[10px]">
                    <div className="flex flex-col gap-[10px] justify-center items-start">
                      <p className="text-[14px] font-plus-jakarta font-medium leading-[18px] text-left text-global-6 ml-[13px]">
                        Total Employee
                      </p>
                      <div className="flex flex-row justify-between items-center w-full">
                        <p className="text-[24px] lg:text-[36px] font-plus-jakarta font-bold leading-[32px] lg:leading-[46px] text-left text-global-5">
                          560
                        </p>
                        <Button
                          variant="secondary"
                          size="small"
                          leftImage={{
                            src: "/images/img_arrowup.svg",
                            width: 10,
                            height: 10
                          }}
                          className="text-[10px] font-plus-jakarta font-normal leading-[13px] tracking-[1px] text-left mb-[6px]"
                          onClick={() => {}}
                        >
                          12%
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Attendance Card */}
                  <div className="bg-global-5 border border-global-2 rounded-[8px] p-[8px] lg:p-[10px]">
                    <div className="flex flex-col gap-[10px] justify-center items-start">
                      <p className="text-[14px] font-plus-jakarta font-medium leading-[18px] text-left text-global-6 ml-[13px]">
                        Attendance
                      </p>
                      <div className="flex flex-row justify-between items-center w-full">
                        <p className="text-[24px] lg:text-[36px] font-plus-jakarta font-bold leading-[32px] lg:leading-[46px] text-left text-global-5">
                          560
                        </p>
                        <Button
                          variant="secondary"
                          size="small"
                          leftImage={{
                            src: "/images/img_arrowup.svg",
                            width: 10,
                            height: 10
                          }}
                          className="text-[10px] font-plus-jakarta font-normal leading-[13px] tracking-[1px] text-left mb-[6px]"
                          onClick={() => {}}
                        >
                          12%
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Projects Card */}
                  <div className="bg-global-5 border border-global-2 rounded-[8px] p-[8px] lg:p-[10px]">
                    <div className="flex flex-col gap-[10px] justify-center items-start">
                      <p className="text-[14px] font-plus-jakarta font-medium leading-[18px] text-left text-global-6 ml-[13px]">
                        Projects
                      </p>
                      <div className="flex flex-row justify-between items-center w-full">
                        <p className="text-[24px] lg:text-[36px] font-plus-jakarta font-bold leading-[32px] lg:leading-[46px] text-left text-global-5">
                          560
                        </p>
                        <Button
                          variant="secondary"
                          size="small"
                          leftImage={{
                            src: "/images/img_arrowup.svg",
                            width: 10,
                            height: 10
                          }}
                          className="text-[10px] font-plus-jakarta font-normal leading-[13px] tracking-[1px] text-left mb-[6px]"
                          onClick={() => {}}
                        >
                          12%
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* On Leave/Absent Card */}
                  <div className="bg-global-5 border border-global-2 rounded-[8px] p-[8px] lg:p-[10px]">
                    <div className="flex flex-col gap-[10px] justify-center items-start">
                      <p className="text-[14px] font-plus-jakarta font-medium leading-[18px] text-left text-global-6 ml-[13px]">
                        On Leave / Absent
                      </p>
                      <div className="flex flex-row justify-between items-center w-full">
                        <p className="text-[24px] lg:text-[36px] font-plus-jakarta font-bold leading-[32px] lg:leading-[46px] text-left text-global-5">
                          560
                        </p>
                        <Button
                          variant="secondary"
                          size="small"
                          leftImage={{
                            src: "/images/img_arrowup.svg",
                            width: 10,
                            height: 10
                          }}
                          className="text-[10px] font-plus-jakarta font-normal leading-[13px] tracking-[1px] text-left mb-[6px]"
                          onClick={() => {}}
                        >
                          12%
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Widget */}
            <div className="w-full lg:w-[40%] flex flex-col justify-start items-center self-end mt-[22px] lg:mt-0">
              <Calendar />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="w-full flex flex-col justify-start items-end mt-[6px]">
            <div className="w-[20%] bg-global-5 h-[72px] rounded-[6px]"></div>
            <div className="w-[40%] bg-global-5 border border-global-2 rounded-[16px] p-[26px] mt-[-64px]">
              <p className="text-[16px] font-plus-jakarta font-semibold leading-[21px] text-left text-global-4 mb-[1012px]">
                {Calendar.formatDateRange()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;