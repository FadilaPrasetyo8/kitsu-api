import React from "react";
import { FooterWrapper, PageButton, Pagination } from "./styles/Animes.styled";

const Footer = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <FooterWrapper>
      <Pagination>
        <PageButton
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </PageButton>

        {[...Array(5)].map((_, index) => {
          const pageNum = Math.max(1, currentPage - 2) + index;
          return (
            pageNum <= totalPages && (
              <PageButton
                key={index}
                active={currentPage === pageNum}
                onClick={() => setCurrentPage(pageNum)}
              >
                {pageNum}
              </PageButton>
            )
          );
        })}

        <PageButton
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </PageButton>
      </Pagination>
    </FooterWrapper>
  );
};

export default Footer;
