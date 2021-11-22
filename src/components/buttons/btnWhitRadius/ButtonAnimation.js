import React from 'react'

export const ButtonAnimation = ({ type, text }) => {
  return (
    <button type={ type } className="buttonAnimation text-uppercase montserrat-bold fs-20">
      { text }
    </button>
  )
}
export const ButtonAnimationGray = ({ type, text }) => {
  return (
    <button type={ type } className="buttonAnimation buttonAnimationGray text-uppercase montserrat-bold fs-20">
      { text }
    </button>
  )
}
