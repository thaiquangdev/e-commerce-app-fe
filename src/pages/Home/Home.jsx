import BestSellers from "../../components/BestSellers";
import CategoryList from "../../components/CategoryList";

const Home = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="pt-8">
        <CategoryList />
      </div>
      <div className="pt-10">
        <BestSellers />
      </div>
    </div>
  );
};

export default Home;
