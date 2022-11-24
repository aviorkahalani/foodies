import React from 'react'
import { NavLink } from 'react-router-dom'

export const AppHeader = () => {
  return (
    <header className="flex justify-between items-center container p-4 m-auto lg:max-w-5xl">
      <div className="logo text-2xl font-semibold">Drinko</div>
      <nav className="flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}
