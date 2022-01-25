import { MdPersonSearch } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import JobList from "./JobList";

const Home = () => {
  const [developer, setDeveloper] = useState("");
  // const [limit, setLimit] = useState("");
  // const [skip, setSkip] = useState("");
  const [job, setJob] = useState([]);


  // ******************* FETCHING  BY INPUT VALUE *****************

  const fetchJobsWithInputValue = async () => {
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${developer}`,
        {
          "Content-Type": "application/json",
        }
      );

      if (response.ok) {
        const jobs = await response.json();
        setJob(jobs);
        console.log(job);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ******************* FETCHING  BY LIMIT AND OFFSET *****************

  // const fetchJobsWitHLimitAndOffset = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://strive-jobs-api.herokuapp.com/jobs?limit=${limit}&&skip=${skip}`,
  //       {
  //         "Content-Type": "application/json",
  //       }
  //     );

  //     if (response.ok) {
  //       const jobs = await response.json();
  //       setJob(jobs);
  //       console.log(job);
  //     }

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetchJobsWithInputValue();
  }, [developer]);

  // useEffect(() => {
  //   fetchJobsWitHLimitAndOffset();
  // }, [limit, skip]);
  return (
    <>
      <h1 className="text-light mt-5">
        <strong>Strive Job Search Engine</strong> <MdPersonSearch />
      </h1>
      <Form className="mt-5">
        <Form.Group controlId="formBasicEmail">
          {/* <FaSearch className="search-icon"/> */}
          <Form.Control
            className="text-left search-input rounded-pill"
            type="search"
            placeholder="Even Yupiter Can Be Found Here..."
            value={developer}
            onChange={(e) => setDeveloper(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Row>
        <JobList job={job, developer}/>
      </Row>
    </>
  );
};
export default Home;
