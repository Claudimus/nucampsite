import { Row } from "reactstrap";
import { Col } from "reactstrap";
import { CAMPSITES } from "../../app/shared/CAMPSITES";
import CampsiteCard from "./CampsiteCard";

const CampsitesList = () => {
  return (
    <Row className="ms-auto">
      {
        (CAMPSITES.map = (campsite) => (
          <Col md="5" className="m-4" key={campsite.id}>
            <CampsiteCard camnpsite={campsite} />
          </Col>
        ))
      }
    </Row>
  );
};

export default CampsitesList;