import React from "react";

const FooterInfo = () => {
  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
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
