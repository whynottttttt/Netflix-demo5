import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Homepage.style.css'

export const Homepage = () => {
  return (
    <div className="homepage-container">
      <Container>
        <Row className="hero-section">

          <Link to="/movies">

          </Link>

        </Row>
      </Container>
    </div>
  )
}
