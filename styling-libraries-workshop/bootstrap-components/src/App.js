import React, { Component } from 'react';

// bootstrap styles have been imported in index.js
// react-bootstrap components
import { 
  Card, CardBody, CardTitle, 
  CardText, Button, Form, 
  FormText, FormGroup, Label, 
  Input, Col
} from 'reactstrap';

class App extends Component {
  render() {
    // use inline styles to override bootstrap styling  
    const styles = {
      cardStyle: { width: '50%', margin: 'auto' },
      colStyle: { padding: '0', margin: '0' },
      checkBoxStyle: { marginBottom: '1rem' }
    };
    return (
      <div className="app">
        <Card style={ styles.cardStyle }>
          <CardBody>
            {/* CARD DETAILS */}
            <CardTitle>Sign up</CardTitle>
            <CardText>Please enter your personal information below.</CardText>
            {/* FORM */}
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <Form inline>
                  <Col style={ styles.colStyle }>
                    <Input placeholder="First name" />
                  </Col>
                  <Col style={ styles.colStyle }>
                    <Input placeholder="Last name" />
                  </Col>
                </Form>
              </FormGroup>
              <FormGroup>
                <Label>Email address</Label>
                <Input placeholder="Enter email" />
                <FormText color="danger">We'll never share your email with anyone else.</FormText>
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input placeholder="Password" />
              </FormGroup>
              <FormGroup check style={ styles.checkBoxStyle }>
                <Label check>
                  <Input type="checkbox" />
                    I agree to your 1,000,000 page privacy policy.
                  </Label>
              </FormGroup>
            </Form>
            {/* BUTTONS */}
            <Button color="primary">Submit</Button> {' '}
            <Button outline color="primary">Cancel</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default App;
