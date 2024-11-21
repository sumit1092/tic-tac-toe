import React, { useState } from 'react';
import './style.css';

const Tictactoe = () => {
    const [ticArray, setTicArray] = useState(new Array(9).fill(''));
    const [winMessage, setWinMessage] = useState('');
    const [isCross, setIsCross] = useState(true);

    function winLogic(newTicArray) {
        // Rows
        for (let i = 0; i <= 6; i += 3) {
            if (
                newTicArray[i] === newTicArray[i + 1] && newTicArray[i] === newTicArray[i + 2] && newTicArray[i] !== ''
            ) {
                setWinMessage(`${newTicArray[i]} wins`);
                return;
            }
        }

        // Columns
        for (let i = 0; i <= 2; i++) {
            if (
                newTicArray[i] === newTicArray[i + 3] && newTicArray[i] === newTicArray[i + 6] && newTicArray[i] !== ''
            ) {
                setWinMessage(`${newTicArray[i]} wins`);
                return;
            }
        }

        // Diagonals
        if (
            newTicArray[0] === newTicArray[4] && newTicArray[0] === newTicArray[8] && newTicArray[0] !== ''
        ) {
            setWinMessage(`${newTicArray[0]} wins`);
            return;
        }

        if (
            newTicArray[2] === newTicArray[4] && newTicArray[2] === newTicArray[6] && newTicArray[2] !== ''
        ) {
            setWinMessage(`${newTicArray[2]} wins`);
            return;
        }
        
        if (newTicArray.every((val) => val !== '')) {
            setWinMessage('Match Draw');
        }
    }

    function fillTicArray(index) {
        if (ticArray[index] === '' && winMessage === '') {
            const newTicArray = [...ticArray];
            newTicArray[index] = isCross ? 'X' : 'O';
            setTicArray(newTicArray);
            setIsCross(!isCross);

            winLogic(newTicArray);
        }
    }

    function resetGame() {
        setTicArray(new Array(9).fill(''));
        setWinMessage('');
        setIsCross(true);
    }

    return (
        <div className='container'>
            <h1>Tic Tac Toe!</h1>
            <div className='grid'>
                {ticArray.map((val, index) => (
                    <div className='box' key={index} onClick={() => fillTicArray(index)}>
                        {val}
                    </div>
                ))}
            </div>
            <p className='msg'>{winMessage}</p>
            <button type='button' className='btn' onClick={resetGame}>Reset Game</button>
        </div>
    );
};

export default Tictactoe;
