import {Col, Card, Button, Alert, Container} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import { AiFillLike } from "react-icons/ai";
// import { AiTwotoneLike } from "react-icons/ai";
import {connect} from 'react-redux'
import { addToFavoritesWithThunk } from "../redux/actions";

const mapStateToProps =(state)=> ({
  isError: state.jobOffers.isError
})

const mapDispatchToProps = (dispatch) => ({
  addToFavorite: (favJob) => {
    dispatch(addToFavoritesWithThunk(favJob))
  },
})

const JobList =({job, inputValue, addToFavorite, isError})=> {
    const location = useLocation();
    return(
      // <Container>
      <>
      {
        isError 
        ? <Alert  variant="danger" className="text-center rounded-pill mt-5" style={{ fontSize: "15px",  marginLeft:"500px" }}>
            Error has occured {isError}
          </Alert> 
        : job.data &&
          job.data
            .filter((j) => j.title.toLowerCase().includes(inputValue))
            .map((j) => (
              <Col xs={3} key={j._id}>
                <Card className="mt-5">
                  <Card.Body>
                    <Card.Title style={{ color: "white" }}>
                      <Link to="/:company">
                        <div
                          className={(location.pathname === "/:company" ? " active" : "")}>
                          {j.company_name}
                        </div>
                      </Link>
                    </Card.Title>
                    <Card.Text style={{ color: "white" }}>{j.title}</Card.Text>
                   {
                    
                    <Button className="border-0 mr-auto" style={{ background: "#282C34" }} onClick={() => {addToFavorite(j)}}>
                        <AiFillLike style={{ fontSize: "25px" }} />
                    </Button>
                    
                  }
                  </Card.Body>
                </Card>
              </Col>
            ))
      }
        </>
      // </Container>
          )
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList)