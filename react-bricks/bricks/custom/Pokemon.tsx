import React from 'react'
import { types } from 'react-bricks/frontend'
import Section from '../react-bricks-ui/shared/components/Section'
import Container from '../react-bricks-ui/shared/components/Container'

interface PokemonProps {
  id: number
  name: string
  height: number
  weight: number
  imageUrl: string
}

const Pokemon: types.Brick<PokemonProps> = ({
  id,
  name,
  height,
  weight,
  imageUrl,
}) => {
  if (!id || !name || !height || !weight || !imageUrl) {
    return <div className="text-center text-red-500 underline text-xl">Pokemon not found!</div>
  }
  return (
    <Section>
      <Container>
        <img src={imageUrl} className="mx-auto w-36 mb-4" />

        <h1 className="text-5xl font-extrabold text-center mb-6">{name}</h1>

        <p className="text-center">
          #{id} - Height {height / 10} m - Weight {weight / 10} Kg
        </p>
      </Container>
    </Section>
  )
}

Pokemon.schema = {
  name: 'Pokemon',
  label: 'Pokemon',
  mapExternalDataToProps: (externalData, brickProps) => ({
    id: externalData.id,
    name: externalData.name,
    height: externalData.height,
    weight: externalData.weight,
    imageUrl: externalData.imageUrl,
  }),

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default Pokemon
