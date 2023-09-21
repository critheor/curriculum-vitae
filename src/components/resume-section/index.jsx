import { Col, Container, Row } from 'react-bootstrap'
import InfoResumeCard from '../info-resume-card'
import './style.css'

export default function ResumeSection({title}) {
  return (
    <Container className='resume-s-pt'>
        <Row>
            <Col sm={4}>
                <h4>{title || 'Default Title'}</h4>
            </Col>
            <Col sm={8}>
                <InfoResumeCard />
            </Col>
        </Row>
    </Container>
  )
}
