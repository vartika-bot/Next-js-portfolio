import React, { useState } from 'react';
import { Container, Form, FormGroup, FormControl, Button, Card, ListGroup } from 'react-bootstrap'; // Added 'Form' import
import DoctorNavBar from "./DoctorNavbar.js";

// Import image
import chatsImage from './images/chats.jpeg'; // Adjust path if necessary

function AnalyticsChat() {
    const [selectedPatient, setSelectedPatient] = useState('');
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const patients = [
        { id: 1, name: "Deena Cooley" },
        { id: 2, name: "Jerry Wilcox" },
        { id: 3, name: "Eduardo Kramer" }
    ];

    const handlePatientChange = (event) => {
        setSelectedPatient(event.target.value);
        setChatHistory([]); // Clear chat history when switching patients
    };

    const handleSend = () => {
        if (message.trim()) {
            const newMessage = {
                text: message,
                sender: 'Doctor',
                timestamp: new Date().toLocaleTimeString()
            };
            setChatHistory([...chatHistory, newMessage]);
            setMessage(''); // Clear the input field
        }
    };

    return (
        <>
        <DoctorNavBar/ >
    
        <div style={styles.layout}>
            <div style={styles.chatSection}>
                <Container className="mt-4" style={{ maxWidth: '600px' }}>
                    <h3 className="mb-4">Chat with Patients</h3>
                    <FormGroup className="mb-3">
                        <Form.Label>Select Patient</Form.Label>
                        <FormControl
                            as="select"
                            value={selectedPatient}
                            onChange={(e) => handlePatientChange(e)}
                        >
                            <option value="">-- Select a Patient --</option>
                            {patients.map((patient) => (
                                <option key={patient.id} value={patient.name}>{patient.name}</option>
                            ))}
                        </FormControl>
                    </FormGroup>
                    <Card className="mb-3">
                        <Card.Body>
                            <h5>Chat History</h5>
                            <ListGroup variant="flush">
                                {chatHistory.length > 0 ? (
                                    chatHistory.map((chat, index) => (
                                        <ListGroup.Item key={index}>
                                            <strong>{chat.sender}:</strong> {chat.text} <em>({chat.timestamp})</em>
                                        </ListGroup.Item>
                                    ))
                                ) : (
                                    <ListGroup.Item>No messages yet.</ListGroup.Item>
                                )}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <Form.Group className="mb-3">
                        <FormControl
                            type="text"
                            placeholder="Type your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </Form.Group>
                    <Button
                        variant="dark"
                        onClick={handleSend}
                        className="w-100"
                    >
                        Send
                    </Button>
                </Container>
            </div>
            <div style={styles.imageSection}>
                <img src={chatsImage} alt="Chat Illustration" style={styles.image} />
            </div>
        </div>
        </>
    );
}

const styles = {
    layout: {
        display: "grid",
        gridTemplateColumns: "75% 25%", // 75% for chat section, 25% for image
        height: "100vh", // Full viewport height
    },
    chatSection: {
        backgroundColor: "#f0fffb", // Background color for the right 75% section
        padding: "20px",
        overflowY: "auto",
    },
    imageSection: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0",
        overflow: "hidden", // Ensures no overflow
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover", // Makes the image fill the container while maintaining its aspect ratio
    },
};

export default AnalyticsChat;
