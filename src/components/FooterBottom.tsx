import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div className="bg-whitetext-sm py-4">
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left - Copyright Text */}
        <div className="text-center md:text-left mb-2 md:mb-0">
          <p>© Bản quyền 2015 - Đại học Công nghiệp Thành phố Hồ Chí Minh</p>
          <p className="text-xs mt-1">
            Mọi hành động sử dụng nội dung đăng tải trên Website iuh.edu.vn phải
            có sự đồng ý bằng văn bản của Đại học Công nghiệp Thành phố Hồ Chí
            Minh
          </p>
        </div>

        {/* Right - Social Icons */}
        <div className="flex space-x-4">
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
  );
};

export default FooterBottom;
