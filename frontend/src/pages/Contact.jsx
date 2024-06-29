import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.bg};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.text_primary};
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.text_primary};
  }
`;

const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primary_hover};
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log("Form submitted:", formData);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Contact Us</Title>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <Input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />
        <TextArea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="6"
          required
        />
        <Button type="submit">Send Message</Button>
      </Form>
    </Container>
  );
};

export default ContactPage;
