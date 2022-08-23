import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import styled from 'styled-components';
import MinusIcon from '@mui/icons-material/Remove';
import PlusIcon from '@mui/icons-material/Add';

type DocumentProps = {
  numPages: number;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: gray;
`;

const Button = styled.button`
  position: absolute;
  right: 10px;
  width: 50px;
  height: 50px;
  z-index: 1;
  background-color: lightgray;
  border: 0;
  border-radius: 25px;
  box-shadow: 5px 5px 5px #736f6e;
  &:hover {
    background-color: #b6b6b4;
    transition: 0.3s;
  }
`;

export const Resume = () => {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(1000);

  function onDocumentLoadSuccess({ numPages }: DocumentProps ) {
    setNumPages(numPages);
  }

  function zoomIn() {
    setWidth(width + 100);
  }

  function zoomOut() {
    setWidth(width - 100);
  }

  return (
    <Wrapper>
      <Button style={{top: 50}} onClick={() => zoomIn()}><PlusIcon /></Button>
      <Button style={{top: 110}} onClick={() => zoomOut()}><MinusIcon /></Button>

      <Document file="./cv_funny.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} width={width} />
      </Document>
    </Wrapper>
  );
}
