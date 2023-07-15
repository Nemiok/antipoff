import React from "react";
import './styles.css'

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number) => void;
  totalPag: number,
  currentPag: number
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  currentPag,
  totalPag
}) => {
  const totalPages = totalPag || Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    onPageChange(pageNumber);
  };
  console.log(currentPag)
  const renderPageNumbers = React.useMemo(() => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`Pagination__PageItem ${i === currentPag ? "Pagination__PageItem_active" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          <button className="Pagination__PageLink">{i}</button>
        </li>
      );
    }

    return pageNumbers;
  }, [totalPages, currentPag]);

  if (totalPages === 1) return null;

  return (
    <nav aria-label="Pagination">
      <ul className="Pagination">
        {renderPageNumbers}
      </ul>
    </nav>
  );
};

export default React.memo(Pagination);
