import React from "react";
import styles from "../style/PdfPageIndicator.module.css";

interface PdfPageIndicatorProps {
  currentPage: number;
  totalPages: number;
}

const PdfPageIndicator: React.FC<PdfPageIndicatorProps> = ({ currentPage, totalPages }) => {
  return (
    <div className={styles.pageIndicator}>
      Page {currentPage} of {totalPages}
    </div>
  );
};

export default PdfPageIndicator; 