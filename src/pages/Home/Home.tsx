import Pagination from "../../components/Pagination/Pagination";
import Repositories from "../../components/Repositories/Repositories";
import TokenForm from "../../components/TokenForm";
import useStore from "../../config/store";

const Home = () => {  
  const { isLoading } = useStore((state) => state);
  
  return localStorage.getItem('token') === null
    ? <TokenForm />
    : <section className="home">
      <Repositories />
      { !isLoading && <Pagination /> }
    </section>
};

export default Home;