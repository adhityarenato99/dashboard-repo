import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Jumbotron,
  Nav,
  Navbar,
  NavDropdown,
  Row
} from "react-bootstrap";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar expand="md" bg="warning" variant="dark" fixed="top">
        <Navbar.Brand href="#home">BINUS CENTER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" active>
              Home
            </Nav.Link>
            <Nav.Link href="#features">Link</Nav.Link>
            <Nav.Link href="#pricing" disabled>
              Disabled
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action">Action</NavDropdown.Item>
              <NavDropdown.Item href="#another">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#something">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#separated">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline className="my-2 my-lg-0">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success" className="my-2 my-lg-0">
              Search
            </Button>
          </Form>
        </Navbar.Collapse> */}
      </Navbar>

      <main role="main" className="pt-5">
        <Jumbotron>
          <Container>
            <h1 className="display-3">Selamat Datang di <br />Ujian Sertifikasi Kompetensi</h1>
            <ul>
              <li>Bertujuan Sebagai Bentuk Penilaian Untuk Mengukur Pencapaian Kompetensi Peserta Didik
              </li>
              <li>Bertujuan Sebagai Informasi Atas Kompetensi Yang Dimiliki Peserta Didik Sebelum Masuk ke Dunia Kerja</li>
            </ul>
            <p>
              <Button variant="primary" size="lg" role="button" href="https://docs.google.com/presentation/d/1uxr5Rmh_2gR09C3SaVU0rgDZxj5jhvyvTO3icuLtF6Y/edit?usp=sharing">
                Silahkan Klik Repository &raquo;
              </Button>
            </p>
          </Container>
        </Jumbotron>
        {/* 
        <Container>
          <Row>
            <Col md={4} className="pb-3">
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <Button variant="secondary" role="button">
                View details &raquo;
              </Button>
            </Col>
            <Col md={4} className="pb-3">
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.{" "}
              </p>
              <Button variant="secondary" role="button">
                View details &raquo;
              </Button>
            </Col>
            <Col md={4} className="pb-3">
              <h2>Heading</h2>
              <p>
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Vestibulum id ligula porta felis euismod
                semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
              <Button variant="secondary" role="button">
                View details &raquo;
              </Button>
            </Col>
          </Row>
        </Container> */}

        <hr />
      </main>

      {/* <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me ya'll!
          </Button>
        </div>
      </Alert>
      <Container>
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </Container>
      <hr /> */}

      <footer className="container">
        <p>&copy; BINUS Center 2024</p>
      </footer>
    </>
  );
}

export default App;
