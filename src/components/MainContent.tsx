import { articleSections } from "../data/articles";
import ArticleSection from "./ArticleSection";
import SidebarMenu from "./SidebarMenu";

const MainContent = () => {
  return (
    <main className="container mx-auto flex flex-col md:flex-row mt-4">
      {/* <!-- Sidebar --> */}
      <SidebarMenu />
      {/* <!-- Content --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articleSections.map((section, idx) => (
          <ArticleSection key={idx} {...section} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
