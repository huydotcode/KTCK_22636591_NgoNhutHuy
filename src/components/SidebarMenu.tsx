import { FaAngleRight } from "react-icons/fa";

const menu = [
  {
    label: "LÃNH ĐẠO",
    children: [
      { label: "Đảng ủy", href: "/vi/dang-uy-s22.html" },
      { label: "Ban giám hiệu", href: "/vi/ban-giam-hieu-s23.html" },
    ],
  },
  {
    label: "CÁC PHÒNG BAN",
    children: [
      { label: "Phòng Tổ chức - Hành chính", href: "#" },
      { label: "Phòng Tài chính - Kế toán", href: "#" },
    ],
  },
  {
    label: "CÁC KHOA",
    children: [
      { label: "Khoa Công nghệ Cơ khí", href: "#" },
      { label: "Khoa Công nghệ Thông tin", href: "#" },
    ],
  },
];

function SidebarMenu() {
  return (
    <div className="bg-white border rounded-b shadow w-64">
      <div className="bg-blue-900 text-white font-bold text-center py-2 rounded-t">
        CƠ CẤU TỔ CHỨC
      </div>
      <ul className="divide-y divide-gray-300">
        {menu.map((item, idx) => (
          <li key={idx} className="group relative">
            <button className="w-full flex justify-between items-center px-4 py-3 bg-gray-200 hover:bg-blue-100 font-semibold transition">
              <span>{item.label}</span>
              <FaAngleRight className="text-gray-600" />
            </button>
            {/* Dropdown */}
            {item.children && (
              <ul className="absolute left-full top-0 min-w-[180px] bg-white border shadow-lg z-10 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity duration-200">
                {item.children.map((child, cidx) => (
                  <li key={cidx}>
                    <a
                      href={child.href}
                      className="block px-4 py-2 hover:bg-blue-100 text-gray-800"
                    >
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarMenu;
