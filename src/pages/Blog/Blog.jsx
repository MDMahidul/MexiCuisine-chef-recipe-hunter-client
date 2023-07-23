import React, { useRef } from 'react';
import { Button, Container } from 'react-bootstrap';
import { FaRegThumbsUp, FaAngleRight, FaDownload } from "react-icons/fa6";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Blog = () => {
    const pdfRef = useRef();
    const handleDownload=()=>{
       const input = pdfRef.current; 
       html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png'); 
        const pdf = new jsPDF('p', 'mm', '04', true); 
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY= 30;
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save('blog.pdf');
       });
    }
    return (
      <Container className="py-4" ref={pdfRef}>
        <h3 className="text-center fw-bold text-secondary-emphasis pb-4">
          Blog Page
        </h3>
        <div ref={pdfRef}>
          <div>
            <h5 className="gray">
              1. The differences between uncontrolled and controlled components.{" "}
            </h5>
            <div className="gray ms-4">
              <div className="d-flex">
                <span className="fw-bold">
                  <FaAngleRight></FaAngleRight>
                </span>
                <p>
                  In controlled components, the form input values are controlled
                  by React state. But for uncontrolled components the form input
                  values are managed by the DOM.{" "}
                </p>
              </div>
              <div className="d-flex">
                <span className="fw-bold">
                  <FaAngleRight></FaAngleRight>
                </span>
                <p>
                  {" "}
                  For controlled components, we need to handle the onChange
                  event for the form inputs and update the state with the new
                  value individually. In uncontrolled components we can direct
                  read the value by using DOM.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h5 className="gray">
              2. How to validate React props using PropTypes
            </h5>
            <div className="gray ms-4">
              <div className="d-flex">
                <span className="fw-bold">
                  <FaAngleRight></FaAngleRight>
                </span>
                <p>
                  PropTypes are simply a mechanism that ensures that the passed
                  value is of the correct datatype. This makes sure that we
                  don't receive an error at the very end of our app by the
                  console which might not be easy to deal with.We can use
                  PropTypes to validate any data we are receiving from props.
                </p>
              </div>
              <div className="d-flex">
                <span className="fw-bold">
                  <FaAngleRight></FaAngleRight>
                </span>
                <p>
                  PropTypes are also objects with a key and a value pair where
                  the `key` is the name of the prop while the value represents
                  the type or class by which they are defined.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h5 className="gray">
              3. The difference between NodeJS and ExpressJS.
            </h5>
            <div className="gray ms-4">
              <div className="d-flex">
                <span className="fw-bold">
                  <FaAngleRight></FaAngleRight>
                </span>
                <p>
                  {" "}
                  NodeJS is a cross-platform, free, and open-source javascript
                  runtime environment that allows clients to quickly build web
                  applications. On the other hand ExpressJS is a web framework
                  built on top of Node.js that enables you to design a web
                  application to handle a variety of different HTTP requests.
                </p>
              </div>
              <div className="d-flex">
                <span className="fw-bold">
                  <FaAngleRight></FaAngleRight>
                </span>
                <p>
                  NodeJS provides core modules and APIs that allow developers to
                  build server-side applications, handle file I/O, and perform
                  network operations. And ExpressJS provides a set of features
                  and tools to simplify the process of building web applications
                  and APIs
                </p>
              </div>
              <div className="d-flex">
                <span className="fw-bold">
                  <FaAngleRight></FaAngleRight>
                </span>
                <p>
                  NodeJS is suitable for building scalable, real-time
                  applications, such as chat applications, streaming services,
                  and APIs. And ExpressJS is widely used in the NodeJS ecosystem
                  and is one of the most popular web frameworks for NodeJS
                  applications.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h5 className="gray">
              4. What is a custom hook, and why will you create a custom hook?
            </h5>
            <div className="gray ms-4">
              <div className="d-flex">
                <span className="fw-bold">
                  <FaAngleRight></FaAngleRight>
                </span>
                <p>
                  {" "}
                  Custom Hook is a JavaScript function which we create by
                  ourselves, when we want to share logic between other
                  JavaScript functions. It allows you to reuse some piece of
                  code in several parts of your app.
                </p>
              </div>
              <div className="d-flex">
                <span className="fw-bold">
                  <FaAngleRight></FaAngleRight>
                </span>
                <p>
                  Whenever we have some logics that we want to use it in
                  multiple page or multiple functions then we can create a
                  custom hook and use hook wherever we want.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center fs-4">
          <Button onClick={handleDownload}>
            <FaDownload></FaDownload>
            <br></br>
            Download PDF
          </Button>
        </div>
      </Container>
    );
};

export default Blog;