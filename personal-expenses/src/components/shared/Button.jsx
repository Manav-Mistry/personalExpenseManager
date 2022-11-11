import React from 'react'
import PropTypes from "prop-types" 
import Form from '../Form'
import { Route, Router, Routes } from 'react-router-dom'

function Button({children, btnType, btnColorStyle, btnSize}) {
    // const handleClick = (onClick) => {
    //     <Router>
    //         <Routes>
    //             <Route path={`./${onClick}`} element={<Form />}/>
    //         </Routes>
    //     </Router>
    // }
  return (
    <button type={btnType} className = {`${btnColorStyle} ${btnSize}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    btnType: 'button',
    btnColorStyle: 'primary',
    btnSize: 'small'
}

Button.propTypes = {
    children: PropTypes.node,
    btnType: PropTypes.string,
    btnColorStyle: PropTypes.string,
    btnSize: PropTypes.string,

}

export default Button