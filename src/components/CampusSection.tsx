import React from "react";

const CampusSection = () => {
  return (
    <div className="grid grid-cols-3 gap-4 bg-white p-4">
      {/* Box 1 - Phân hiệu Quảng Ngãi */}
      <div className="bg-[#1455A0] rounded overflow-hidden shadow">
        <div className="text-white font-bold text-lg p-2">
          PHÂN HIỆU QUẢNG NGÃI
        </div>
        <img
          src="/img/qn.jpg"
          alt="Phân hiệu Quảng Ngãi"
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Box 2 - Cơ sở Thanh Hóa */}
      <div className="bg-[#1455A0] rounded overflow-hidden shadow">
        <div className="text-white font-bold text-lg p-2">CƠ SỞ THANH HÓA</div>
        <img
          src="/img/th.jpg"
          alt="Cơ sở Thanh Hóa"
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Box 3 - Video và Hình ảnh */}
      <div className="bg-[#1455A0] rounded overflow-hidden shadow relative">
        <div className="flex justify-between items-center p-2">
          <div className="text-white font-bold text-lg">VIDEO VÀ HÌNH ẢNH</div>
          <button className="text-xs bg-white text-[#1455A0] px-2 py-1 rounded hover:bg-gray-200">
            xem tất cả
          </button>
        </div>
        <img
          src="/img/video.jpg"
          alt="Video và Hình ảnh"
          className="w-full h-48 object-cover"
        />
        {/* You can replace img with an actual <iframe> if you embed a YouTube video */}
      </div>
    </div>
  );
};

export default CampusSection;
