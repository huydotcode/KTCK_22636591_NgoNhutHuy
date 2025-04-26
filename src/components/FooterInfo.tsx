import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const FooterInfo = () => {
  return (
    <div className="bg-gray-50 py-8 px-4">
      {/* Logo số người truy cập */}
      <div className="flex items-center justify-between">
        <div className="text-center mb-4">
          <img
            src="/img/logo.png"
            alt="Logo IUH"
            className="mx-auto mb-2 w-[200px]"
          />
        </div>

        {/* Thông tin liên hệ */}
        <div className="text-left mb-4 flex-1 ml-10 border-l-2 pl-4">
          <p className="text-gray-600">Số người truy cập: 123456</p>
          <h2 className="text-xl font-bold text-red-700">Thông tin liên hệ</h2>
          <p className="text-gray-600">Đại học Công nghiệp TP. Hồ Chí Minh</p>
          <p className="text-gray-600">Điện thoại: 028 3894 0390</p>
        </div>

        {/* Logo facebook social */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center mb-4 gap-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full"
            >
              <FaFacebookF size={16} color="white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 hover:bg-blue-500 p-2 rounded-full"
            >
              <FaTwitter size={16} color="white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 hover:bg-blue-900 p-2 rounded-full"
            >
              <FaLinkedinIn size={16} color="white" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Liên hệ */}
        <div>
          <h3 className="text-red-700 font-bold uppercase mb-2">Liên hệ</h3>
          <p>ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</p>
          <p>
            Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 1, Quận Gò Vấp, Thành phố Hồ
            Chí Minh
          </p>
          <p>Điện thoại: 028 38940 390 - 100</p>
          <p>
            Tuyển sinh:
            <span className="text-blue-600"> 028 3985 1932</span> -
            <span className="text-blue-600"> 028 3895 5858</span> -
            <span className="text-blue-600"> 028 3985 1917</span>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:dhcn@iuh.edu.vn"
              className="text-blue-600 hover:underline"
            >
              dhcn@iuh.edu.vn
            </a>
          </p>
        </div>

        {/* Hoạt động khác */}
        <div>
          <h3 className="text-red-700 font-bold uppercase mb-2">
            Hoạt động khác
          </h3>
          <ul className="space-y-1">
            <li>Hoạt động phục vụ cộng đồng</li>
            <li>Sinh viên tình nguyện</li>
            <li>CLB/Đội/Nhóm sinh viên</li>
            <li>Kết nối doanh nghiệp</li>
          </ul>
        </div>

        {/* Thông tin mở rộng */}
        <div>
          <h3 className="text-red-700 font-bold uppercase mb-2">
            Thông tin mở rộng
          </h3>
          <ul className="space-y-1">
            <li>Báo chí viết về IUH</li>
            <li>Khám phá IUH</li>
            <li>Kỹ năng mềm</li>
            <li>Bộ sưu tập</li>
            <li>Dịch vụ sinh viên</li>
          </ul>
        </div>

        {/* Văn bản tiện ích */}
        <div>
          <h3 className="text-red-700 font-bold uppercase mb-2">
            Văn bản tiện ích
          </h3>
          <ul className="space-y-1">
            <li>Quy chế - Quy định - Quy trình</li>
            <li>Ba công khai</li>
            <li>Biểu mẫu đào tạo</li>
            <li>Quản lý khoa học</li>
            <li>Phản hồi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
