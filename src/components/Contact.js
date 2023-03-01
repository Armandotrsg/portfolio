import React, { useState, useRef } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        emailjs.sendForm('service_gzzni7v', 'template_vkjqgbv', form.current, 'o_8wIJYlY5NWPHqmf')
        .then((result) => {
            console.log(result.text);
            setStatus({success: true, message: "Message sent successfully!"});
            e.target.reset();
        }, (error) => {
            console.log(error.text);
            setStatus({success: false, message: "Message failed to send!"});
        });
        setTimeout(() => {
            setButtonText("Send");
            setStatus({});
        }, 5000);
    };

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h1>Get in touch</h1>
                        <Form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="user_firstName" placeholder="First Name*" required />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="user_lastName" placeholder="Last Name*" required />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" name="user_email" placeholder="Email Address*" required />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="user_phone" placeholder="Phone Number" />
                                </Col>
                                <Col>
                                    <textarea name="message" rows={6} placeholder="Message*" required />
                                    <button type="submit"><span>{buttonText}</span></button>
                                    {
                                        status.message &&
                                        <p className={status.success === false ? "danger pt-3" : "success pt-3"}>{status.message}</p>
                                    }
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}