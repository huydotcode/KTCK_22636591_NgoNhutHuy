import React from "react";
import DropdownMenu from "./DropdownMenu";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import BannerSwiper from "./BannerSwiper";

const Header = () => {
  return (
    <div>
      <div className="bg-blue-900 text-white text-sm">
        <div className="container mx-auto flex justify-between items-center py-1 px-2">
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://gv.iuh.edu.vn/login.html"
                target="_blank"
                className="flex items-center hover:underline"
              >
                <i className="fa fa-tv mr-1"></i> E-OFFICE
              </a>
            </li>
            <li>
              <a
                href="https://outlook.office.com/owa/?realm=iuh.edu.vn"
                target="_blank"
                className="flex items-center hover:underline"
              >
                <i className="fa fa-envelope-o mr-1"></i> EMAIL
              </a>
            </li>
            <li>
              <a
                href="http://lib.iuh.edu.vn"
                target="_blank"
                className="flex items-center hover:underline"
              >
                <i className="fa fa-book mr-1"></i> THƯ VIỆN - THÔNG TIN
              </a>
            </li>
          </ul>
          <ul className="flex items-center space-x-2">
            <li>
              <a href="/vi/connect-s91.html" className="hover:underline">
                KẾT NỐI
              </a>
              <span className="mx-1">|</span>
              <a href="/vi/contact-us-s90.html" className="hover:underline">
                LIÊN HỆ
              </a>
            </li>
            <li className="flex items-center space-x-1">
              {/* <a href="/vi" className="p-0 mr-2">
                <img
                  src="/templates/2015/style/icon/icon-flag-vn.png"
                  className="w-5 h-5"
                  alt="VN"
                />
              </a> */}
              <a href="/en" className="p-0">
                {/* <img
                  src="/templates/2015/style/icon/icon-flag-en.png"
                  className="w-5 h-5"
                  alt="EN"
                /> */}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Logo and Title */}
      <div className="container mx-auto flex flex-col md:flex-row items-center py-4">
        <div className="md:w-1/4 flex justify-center md:justify-start mb-2 md:mb-0">
          <a href="/vi">
            <img src="/img/logo.png" alt="iuh" className="w-48" />
          </a>
        </div>
        <div className="md:w-3/4 text-center md:text-left">
          <div className="text-blue-900 font-semibold text-sm text-center">
            BỘ CÔNG THƯƠNG
          </div>
          <div className="text-2xl md:text-3xl font-bold text-blue-800 text-center">
            ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH
          </div>
          <div className="text-red-600 text-base mt-1 text-center">
            Đổi mới tư duy, làm giàu thêm tri thức - đời sống
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="bg-blue-800 p-1">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-2">
          <ul className="flex flex-wrap space-x-4 text-white font-semibold py-2">
            <li className="flex items-center">
              <a href="/vi" className="hover:text-yellow-300">
                <IoHome />
              </a>
            </li>

            {/* Giới thiệu dropdown */}
            <DropdownMenu
              title="Giới thiệu"
              items={[
                "Giới thiệu chung",
                "Lịch sử hình thành",
                "Tầm nhìn - Sứ mệnh",
                "Đội ngũ giảng viên",
                "Cơ sở vật chất",
                "Hợp tác quốc tế",
              ]}
            />

            {/* Dao tao */}
            <DropdownMenu
              title="Đào tạo"
              items={[
                "Giới thiệu chung",
                "Chương trình đào tạo",
                "Đào tạo từ xa",
                "Đào tạo liên thông",
                "Đào tạo ngắn hạn",
                "Đào tạo quốc tế",
              ]}
            />

            {/* Tuyển sinh dropdown  */}
            <DropdownMenu
              title="Tuyển sinh"
              items={[
                "Thông tin tuyển sinh",
                "Đăng ký xét tuyển",
                "Hướng dẫn đăng ký",
                "Điểm chuẩn",
                "Học phí",
              ]}
            />

            {/* Nghiên cứu dropdown */}
            <DropdownMenu
              title="Nghiên cứu"
              items={[
                "Giới thiệu chung",
                "Đề tài nghiên cứu",
                "Công bố khoa học",
                "Hợp tác quốc tế",
              ]}
            />

            {/* Sinh viên dropdown */}
            <DropdownMenu
              title="Sinh viên"
              items={[
                "Giới thiệu chung",
                "Hỗ trợ sinh viên",
                "Câu lạc bộ",
                "Hoạt động ngoại khóa",
              ]}
            />

            {/* Giảng viên dropdown */}
            <DropdownMenu
              title="Giảng viên"
              items={[
                "Giới thiệu chung",
                "Đề tài nghiên cứu",
                "Công bố khoa học",
                "Hợp tác quốc tế",
              ]}
            />

            {/* Văn bằng dropdown */}
            <DropdownMenu
              title="Văn bằng"
              items={[
                "Giới thiệu chung",
                "Đề tài nghiên cứu",
                "Công bố khoa học",
                "Hợp tác quốc tế",
              ]}
            />
          </ul>
          <div className="flex items-center">
            <input
              type="text"
              name="keyword"
              placeholder="Tìm kiếm..."
              className="rounded-l px-2 py-1 text-sm border border-gray-300 bg-white focus:outline-none"
            />

            <button className="bg-blue-600 text-white rounded-r px-3 py-1 text-sm flex items-center h-[30px]">
              <FaSearch className="text-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* Carousel or Banner */}
      <div className="w-full bg-gray-200">
        <BannerSwiper />
      </div>
    </div>
  );
};

export default Header;
