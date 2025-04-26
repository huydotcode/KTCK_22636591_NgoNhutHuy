interface Props {
  title: string;
  link: string;
  items: Array<{
    title: string;
    link: string;
    date: string;
    isNew?: boolean;
  }>;
  image?: string;
}

export default function ArticleSection({ title, link, items, image }: Props) {
  return (
    <div className="bg-white border-t-4 border-blue-900 rounded shadow p-4 flex-1 min-w-[320px]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-blue-900 text-lg">{title}</h2>
        <a
          href={link}
          className="bg-gray-200 text-xs px-2 py-1 rounded hover:bg-blue-900 hover:text-white transition"
        >
          xem tất cả
        </a>
      </div>
      {image && (
        <a href={items[0]?.link}>
          <img
            src={image}
            alt=""
            className="w-full h-28 object-cover rounded mb-2"
          />
        </a>
      )}
      <ul className="space-y-1">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-red-600 text-xs mt-1 mr-1">▸</span>
            <div>
              <a
                href={item.link}
                className="hover:underline text-sm font-medium"
              >
                {item.title}
              </a>
              <span className="text-xs text-gray-500 ml-2">{item.date}</span>
              {item.isNew && (
                <span className="ml-2 inline-block align-middle">
                  <span className="bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
                    new
                  </span>
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
