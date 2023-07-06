import { useState } from 'react'
import { Button, Col, Container, Row } from "react-bootstrap"
import { FiHelpCircle } from 'react-icons/fi'
import PropTypes from 'prop-types'

import UseConfirmModal from '../../Modal/ConfirmModal'
import Modal from '../../Modal/Modal'
import title from './pokemonTitle.png'

const InstructionsModal = ({ close }) =>
    <Container>
        <Row>
            <Col className='text-dark'>
                <h4>
                    <div >
                        Welcome to Name That Pokemon
                    </div>
                </h4>
                <h5 className='text-align-start my-4'>
                    <div>
                        Easy Mode:
                    </div>
                    <div>

                    </div>
                    <div>
                        Hard Mode:
                    </div>
                </h5>
            </Col>
        </Row>
        <Row>
            <Col>
                <Button className='w-100' onClick={close}>Close</Button>
            </Col>
        </Row>
    </Container>

InstructionsModal.propTypes = {
    close: PropTypes.func,
}

export const LogoHeader = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <Row className='pokemon-game-header'>
            <Col xs={1} md={2} />
            <Col className='mb-1'>
                <img src={title} className='mw-100' />
            </Col>
            <Col xs={1} md={2} className='d-flex align-items-center justify-content-center'>
                {showModal && <Modal body={
                    <InstructionsModal close={() => setShowModal(false)} />
                } />}
                <FiHelpCircle onClick={() => setShowModal(true)} className='help-circle-icon' size='50%' />
            </Col>
        </Row>
    )
}

const Header = ({ resetGame, correct, streak = 0, exitGame, difficulty = 'EASY' }) => {
    const { Modal, buttonRef } = UseConfirmModal(exitGame, 'Do you want to exit the game?')
    return (
        <>
            {Modal}
            <Col xs={12}>
                <LogoHeader />
            </Col>
            <Col xs={{ span: 6, order: 1 }} sm={{ span: 6, order: 1 }} md={{ span: 3, order: 1 }}
                className='my-1 d-flex justify-content-center align-items-center'
            >
                <Button className='game-option w-100 btn-danger' ref={buttonRef}>
                    Exit Game
                </Button>
            </Col>
            <Col xs={{ span: 12, order: 3 }} md={{ span: 6, order: 2 }}
                className='d-flex align-items-center justify-content-center'
            >
                <Row>
                    <Col className='streak-counter'>
                        <span className='me-2'>
                            {`STREAK: `}
                        </span>
                        <span>
                            {streak}
                            {difficulty === 'HARD' ? '(H)' : ''}
                        </span>
                    </Col>
                </Row>
            </Col>
            <Col xs={{ span: 6, order: 2 }} sm={{ span: 6, order: 2 }} md={{ span: 3, order: 3 }}
                className='my-1 d-flex justify-content-center align-items-center'
            >
                <Button disabled={correct} className='game-option w-100' onClick={resetGame}>
                    Restart
                </Button>
            </Col>
        </>
    )
}

Header.propTypes = {
    exitGame: PropTypes.func,
    resetGame: PropTypes.func,
    correct: PropTypes.bool,
    streak: PropTypes.number,
    difficulty: PropTypes.string
}

export default Header
