import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const stylesArr = ['btn-primary', 'btn-outline']

const sizesArr = ['btn-medium', 'btn-large']

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {

  const checkButtonStyle = stylesArr.includes(buttonStyle) ? buttonStyle : stylesArr[0]

  const checkButtonSize = sizesArr.includes(buttonSize) ? buttonSize : sizesArr[0]

  return (
    <Link to="/sign-up" className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  )
}

export default Button