import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon" style={{ paddingTop: '30px' }}>
            <a href="http://github.com/kwamasali" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="www.linkedin.com/in/karen-natozo-wamasali/" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="mailto:k.wamasali@gmail.com" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Karen Natozo Wamasali 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
