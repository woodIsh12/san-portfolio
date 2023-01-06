import React, { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import resume from "../icons/programming.pdf"
import Footer from "./Fotter";


const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
  };

const About = (props)=>{

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1);
    }
  
    function changePage(offset) {
      setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
  
    function previousPage() {
      changePage(-1);
    }
  
    function nextPage() {
      changePage(1);
    }
  
    const { pdf } = props;
  
    return (
      <>
      <div className="about">
        <div className="skills">
            <h2>Resume</h2>
        </div>

        <Document
          file={resume}
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
          >
          <Page pageNumber={pageNumber} />
        </Document>
        <div>
          <p>
            Page {pageNumber || (numPages-1 ? 1 : "--")} of {numPages-1 || "--"}
          </p>
          <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
            Previous
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages-1}
            onClick={nextPage}
            >
            Next
          </button>
        </div>
    <Footer/>
    </div>

      </>
    );

};

export default About;