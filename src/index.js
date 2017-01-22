import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board'
import { observe } from './Game'

observe(knightPosition => ReactDOM.render(<Board knightPosition={knightPosition} />,
                                          document.getElementById('root'))
       )
