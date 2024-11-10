import { useSearchParams } from "react-router-dom";
import useStore from "../../config/store";

const PaginationItem = ({ index }: { index: number }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { page, updatePage } = useStore((state) => state)

  function updateCurrentPage(index) {
    const page = index + 1;
    updatePage(page);
    updatePageInSearchParams(page)
  }

  function updatePageInSearchParams(page: number) {
    if (page === 1) {
      if (searchParams.has('page')) {
        searchParams.delete('page');
        setSearchParams(searchParams);
      }
    } else {
      setSearchParams({ page });
    }
  }
  
  return <li className={`pagination__item ${(index + 1) === page && 'pagination__item--active'}`}>
    <a className="pagination__link" onClick={() => updateCurrentPage(index)}>{ index + 1 }</a>
  </li>
}

export default PaginationItem;