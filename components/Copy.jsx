import React from 'react'
import Container from './wrapper/Container'

const Copy = () => {
  return (
    <Container>
        <div className="md:w-4/5 md:-ml-12 flex flex-col justify-around items-start gap-2 lg:gap-6">
            <h1 className=" text-yellow-300 drop-shadow-lg text-3xl lg:text-6xl font-bold">PitchMe</h1>
            <h3 className="text-secondary drop-shadow-lg text-xl lg:text-3xl font-bold">Generate quality referral pitch and cover letters in less than 30 seconds using AI magic!</h3>
            <p className="text-secondary drop-shadow-md text-lg lg:text-xl font-semibold">Supercharge your writing and save hours.</p>
        </div>
    </Container>
  )
}

export default Copy