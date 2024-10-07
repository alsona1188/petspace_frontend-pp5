import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import appStyles from "../App.module.css";
import btnStyles from "../styles/Button.module.css";
import { useHistory } from "react-router";
import { axiosReq } from "../api/axiosDefaults";

function AddCategory() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    name: ""
  });
  const { name } = postData;
  const history = useHistory();

  // Handle form field changes
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the category name as JSON to the API
      await axiosReq.post("/category/", { name });
      
      // Redirect to the category detail page after success
      history.push("/");
    } catch (err) {
      // Check for errors and set error messages in state
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      } else {
        console.error("Unauthorized");
      }
    }
  };

  // Define the form layout
  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* Display errors for the name field */}
      {errors?.name?.map((message, idx) => (
        <div key={idx} className="text-danger">
          {message}
        </div>
      ))}

      {/* Cancel and Submit Buttons */}
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}  // Navigate back on cancel
      >
        Cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`} 
        type="submit"
      >
        Create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 mx-auto text-center" md={6}>
          <Container className={appStyles.Content}>
            {textFields}
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default AddCategory;
