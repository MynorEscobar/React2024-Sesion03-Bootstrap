import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function NuevoComponente(){
    return(
        <Container className="mt-5">
            <h1 className="text-center md-4">
                Componente de React
            </h1>
            <Card>
                <Card.Body>
                    <Card.Title>Ejemplo Titulo</Card.Title>
                    <Card.Text>Contenido de la tarjeta</Card.Text>
                    
                </Card.Body>
            </Card>
        </Container>

    )
}
export default NuevoComponente;