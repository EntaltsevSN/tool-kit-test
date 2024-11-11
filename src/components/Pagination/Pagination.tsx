import { PAGE_REPOSITORIES_COUNT } from "../../config/constants";
import useStore from "../../config/store";
import PaginationItem from "./PaginationItem";

const Pagination = () => {
  const { repositoriesData } = useStore((state) => state);
  const pagesCount = repositoriesData?.data === undefined || repositoriesData?.data === null
    ? 0 
    : Math.ceil(Number(repositoriesData?.data.length) / PAGE_REPOSITORIES_COUNT);

  return <ul className="pagination">
    {
      repositoriesData?.data === undefined || 
      repositoriesData?.data === null || 
      !repositoriesData?.data.length
        ? ''
        : Array(pagesCount).fill(null).map((_, index) =>
          <PaginationItem key={index} index={index} />
        )
    }
  </ul>
}

export default Pagination;