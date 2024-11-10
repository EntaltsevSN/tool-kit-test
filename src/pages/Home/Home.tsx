import Pagination from "../../components/Pagination/Pagination";
import Repositories from "../../components/Repositories/Repositories";
import useStore from "../../config/store";

const Home = () => {  
  const { isLoading } = useStore((state) => state)
  
  return <section className="home">
    <Repositories />
    { !isLoading && <Pagination /> }
  </section>
};

export default Home;