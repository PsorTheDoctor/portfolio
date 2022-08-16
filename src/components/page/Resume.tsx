import { useState } from 'react';
import { Document, Page as PdfPage } from 'react-pdf';
import styled from 'styled-components';

type PdfDocumentProps = {
  numPages: number;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: gray;
`;

export const Resume = () => {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: PdfDocumentProps ) {
    setNumPages(numPages);
  }

  return (
    <Wrapper>
      <Document file="./cv_adam_wolkowycki.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <PdfPage pageNumber={pageNumber} />
      </Document>
    </Wrapper>
  );
}
