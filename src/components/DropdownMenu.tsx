interface DropdownMenuProps {
  title: string;
  items: string[];
}

const DropdownMenu = ({ title, items }: DropdownMenuProps) => {
  return (
    <li className="relative group">
      <a href="#" className="hover:text-yellow-300">
        {title}
      </a>

      <ul className="absolute left-0 mt-2 bg-white text-blue-900 shadow-lg rounded hidden group-hover:block z-10 min-w-[200px]">
        {items.map((item, index) => (
          <li key={index}>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default DropdownMenu;
