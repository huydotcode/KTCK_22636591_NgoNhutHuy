import { articleSections } from "../data/articles";
import ArticleSection from "./ArticleSection";
import CampusSection from "./CampusSection";
import SidebarMenu from "./SidebarMenu";

const MainContent = () => {
  return (
    <main className="container mx-auto flex flex-col mt-4">
      <div className="flex">
        {/* <!-- Sidebar --> */}
        <SidebarMenu />
        {/* <!-- Content --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articleSections.map((section, idx) => (
            <ArticleSection key={idx} {...section} />
          ))}
        </div>
      </div>

      <div className="flex-1">
        <CampusSection />
      </div>
    </main>
  );
};

export default MainContent;
