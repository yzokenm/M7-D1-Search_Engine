import { Button, Row, Col, Card, Container } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  companyInfo: state.companyDetails.detail,
});


const CompanyDetailPage = ({ companyInfo }) => {
  return (
    <Container>
    <h1 className="text-info mt-5 text-center">
      This is Company Details
    </h1>
    <Row className="mt-5 d-flex justify-content-center">
      {companyInfo.map((detail, i) => (
        <Col xs={12} md={12} key={i}>
          <Card className="text-light mt-5">
            <Card.Img variant="top" src={detail.company_logo_url} />
            <Card.Body>
              <Card.Title className="text-info">{detail.title}</Card.Title>
              <Card.Text
                dangerouslySetInnerHTML={{ __html: detail.description }}
              ></Card.Text>
              <Button variant="success">{detail.salary}</Button>
            </Card.Body>
          </Card>
        </Col>
        ))}
    </Row>
  </Container>
  );
};

export default connect(mapStateToProps)(CompanyDetailPage);
