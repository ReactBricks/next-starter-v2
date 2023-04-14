import React from 'react'
import { types } from 'react-bricks/frontend'
import Section from '../../shared/components/Section'
import Container from '../../shared/components/Container'

interface Props {
  catFact?: string
}

const ExternalData: types.Brick<Props> = ({ catFact }) => {
  return (
    <Section>
      <Container size="small" paddingBottom="0" paddingTop="0">
        <div className="p-4 border bg-gray-50">
          <h3 className="text-lg font-bold mb-3">
            Example of external data in brick{' '}
            <small>(using the cat facts public API)</small>
            <br />
            <small>
              See the `BlogTitle` brick and the `blog` pageType for
              implementation
            </small>
          </h3>
          <div>{catFact}</div>
        </div>
      </Container>
    </Section>
  )
}

ExternalData.schema = {
  name: 'external-data-example',
  label: 'External Data Example',
  category: 'single column / blog',
  tags: ['external', 'data', 'external data', 'external content', 'api'],
  sideEditProps: [],
  mapExternalDataToProps: ({ catFact }) => ({
    catFact,
  }),
}

export default ExternalData
