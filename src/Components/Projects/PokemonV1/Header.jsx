import PropTypes from 'prop-types'
import { Button, Col, Row } from "react-bootstrap"
import title from './pokemonTitle.png'
import UseConfirmModal from '../../Modal/ConfirmModal'

const Header = ({ resetGame, correct, streak = 0, exitGame, difficulty = 'EASY' }) => {
    const { Modal, buttonRef } = UseConfirmModal(exitGame, 'Do you want to exit the game?')
    return (
        <>
            {Modal}
            <Col xs={12}>
                <h1 className='pokemon-title'>
                    <img src={title} className='mw-100' />
                </h1>
            </Col>
            <Col xs={{ span: 12, order: 1 }} sm={{ span: 6, order: 1 }} md={{ span: 3, order: 1 }}
                className='my-3 d-flex justify-content-center align-items-center'
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
            <Col xs={{ span: 12, order: 2 }} sm={{ span: 6, order: 2 }} md={{ span: 3, order: 3 }}
                className='my-3 d-flex justify-content-center align-items-center'
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
