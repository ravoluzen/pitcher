import React from 'react'
import Nav from './Nav'
import FlexCol from './wrapper/FlexCol'

export default function Layout({ children }) {
  return (
    <FlexCol className="bg-gradient-to-br from-purple-500 to-orange-400 min-h-screen">
        <Nav />
        <main>{children}</main>
        <a className="cursor-pointer" href="https://twitter.com/ravoluzen" target="_blank">
          <h3 className="my-8 text-secondary text-center text-xl font-bold">
            <span className="text-yellow-300">PitchMe</span> by <span className="underline">ravoluzen</span>🐲
              <br />
              <span className="text-lg">(open to frontend/fullstack opportunities)</span>
          </h3>
        </a>
    </FlexCol>
  )
}