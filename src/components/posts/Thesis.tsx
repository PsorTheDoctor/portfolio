import { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import styled from 'styled-components';

type PdfDocumentProps = {
  numPages: any;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: gray;
`

export const Thesis = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: PdfDocumentProps) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <Wrapper>
      <Document file="./thesis.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(
          new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} width={1000} />
        ))}
      </Document>
    </Wrapper>
  );
};
