import React from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import './Promotion.css';

class Promotion extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
           promos:  
        [{ image:"https://upload.wikimedia.org/wikipedia/en/7/72/Tpr_logo.png", title:"CT.Bootcamp", value:"300", text:"Make yourself a genius"},
              { image:"https://target.scene7.com/is/image/Target/GUEST_c4ceb0f0-613d-4580-bca7-cb00d4eea0c8?wid=325&hei=325&qlt=80&fmt=webp", title:"SAT.Honors", value:"300", text:"Get SAT perfect score garanteed"},
              { image:"https://images-na.ssl-images-amazon.com/images/I/71SKZZHYP7L._SX358_BO1,204,203,200_.gif", title:"MCAT.Ultimate", value:"300", text:"Get MCAT Perfect Score"},
              {image:"https://images-na.ssl-images-amazon.com/images/I/71SKZZHYP7L._SX358_BO1,204,203,200_.gif", title:"MCAT.Ultimate", value:"200", text:"Get MCAT Perfect Score"},
              {image:"https://upload.wikimedia.org/wikipedia/en/7/72/Tpr_logo.png", title:"SAT.Honors", value:"200", text:"Get SAT perfect score garanteed"},
              {image:"https://target.scene7.com/is/image/Target/GUEST_c4ceb0f0-613d-4580-bca7-cb00d4eea0c8?wid=325&hei=325&qlt=80&fmt=webp", title:"SAT.Honors", value:"200", text:"Get SAT perfect score garanteed"}
              ]
        };
    }
    // Strugled to connect to the API had CORS issue, {mode: 'no-cors'} did not helped
    // componentDidMount() {
    //     const apiUrl = 'https://www.princetonreview.com/productsearch/getpromosbyproduct';
    //     fetch(apiUrl, {mode: 'no-cors'})
    //       .then((response) => response.json())
    //       .then((data) => {this.setState({promos: data});
    //                        console.log(data);
    //     })
    //       .catch(console.log);
    //   }
    
    render() {
        return(
            <div>
            <Container>
                <Row>
                    {this.state.promos.map((promo, index) => (
                        <Col key={index}>
                            <Card className="card" border="warning">
                                <Card.Header className="center">New Promotion!!!</Card.Header>
                                <Card.Img variant="top" src={promo.image} width={100} height={200}/>
                                <Card.Body>
                                    <Card.Title className="center">{promo.title}</Card.Title>
                                    <Card.Subtitle className="promo">Save ${promo.value} Now</Card.Subtitle>
                                    <Card.Text className="text">{promo.text}</Card.Text>
                                    <div className="center">
                                        <Button variant="primary" href="https://www.princetonreview.com/?ExID=319508398014&ExDt=2&ExDT=2&gclid=CjwKCAjwm_P5BRAhEiwAwRzSO6fdVlDxT3MACo40nEjrrCIuSVkL_-PWcEbiGhTxK1iuHQBUnv5DMxoCBgMQAvD_BwE">Redeem Promotion</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
                </Row>
            </Container>
            </div>
        )
    }
}

export default Promotion;