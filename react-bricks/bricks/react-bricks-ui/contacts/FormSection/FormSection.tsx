import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import blockNames from '../../blockNames'
import {
  containerWidthSideGroupWithFull,
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'

export interface FormSectionProps extends LayoutProps {
  buttonPosition: string
  formElements: types.RepeaterItems
  formButtons: types.RepeaterItems
}

const FormSection: types.Brick<FormSectionProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
}) => {
  return (
    <div>
      <Section
        backgroundColor={backgroundColor}
        borderTop={borderTop}
        borderBottom={borderBottom}
      >
        <Container
          size={width}
          paddingTop={paddingTop}
          paddingBottom={paddingBottom}
        >
          <Repeater
            propName="form-builder"
            // items={formElements}
          />
        </Container>
      </Section>
    </div>
  )
}

FormSection.schema = {
  name: blockNames.FormSection,
  label: 'Form',
  category: 'contact',
  previewImageUrl: `/bricks-preview-images/${blockNames.FormSection}.png`,

  repeaterItems: [
    {
      name: 'form-builder',
      itemLabel: 'Form builder',
      itemType: blockNames.FormBuilder,
      min: 1,
      max: 1,
    },
  ],

  sideEditProps: [
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroupWithFull,
  ],

  getDefaultProps: () => ({
    ...sectionDefaults,
  }),
}

export default FormSection
