import classNames from 'classnames'
import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import { useForm } from 'react-hook-form'
import blockNames from '../../blockNames'
import { buttonColors } from '../../colors'
import { LayoutProps } from '../../LayoutSideProps'
import Container from '../../shared/components/Container'

export interface FormBuilderProps extends LayoutProps {
  buttonPosition: string
  formElements: types.RepeaterItems
  formButtons: types.RepeaterItems
}

const FormBuilder: types.Brick<FormBuilderProps> = ({
  buttonPosition,
  formElements,
  formButtons,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 p-6">
      <Repeater
        propName="form-elements"
        items={formElements}
        itemProps={{ register, errors }}
      />
      <Repeater
        propName="form-buttons"
        items={formButtons}
        renderWrapper={(items) => (
          <div
            className={classNames(
              'w-full flex space-x-6 col-span-2',
              buttonPosition
            )}
          >
            {items}
          </div>
        )}
      />
    </form>
  )
}

FormBuilder.schema = {
  name: blockNames.FormBuilder,
  label: 'Form',
  category: 'contact',
  hideFromAddMenu: true,
  previewImageUrl: `/bricks-preview-images/${blockNames.FormBuilder}.png`,
  repeaterItems: [
    {
      name: 'form-elements',
      positionLabel: 'Form elements',
      items: [
        { type: blockNames.FormInput },
        { type: blockNames.FormTextArea },
        { type: blockNames.FormCheckbox },
        { type: blockNames.FormSelect },
        { type: blockNames.FormRadiobuttons },
      ],
    },
    {
      name: 'form-buttons',
      itemLabel: 'Button',
      itemType: blockNames.Button,
      min: 1,
      max: 2,
    },
  ],

  sideEditProps: [
    {
      groupName: 'Buttons',
      defaultOpen: true,
      props: [
        {
          name: 'buttonPosition',
          label: 'Buttons position',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'justify-start', label: 'Left' },
              { value: 'justify-center', label: 'Center' },
              { value: 'justify-end', label: 'Right' },
            ],
          },
        },
      ],
    },
  ],

  getDefaultProps: () => ({
    buttonPosition: 'justify-center',
    'form-elements': [
      {
        type: blockNames.FormInput,
        props: {
          fieldName: 'firstname',
          isRequired: false,
          inputType: 'text',
          columns: '1',
          label: 'First Name',
          requiredError: '',
          pattern: '',
          patternError: '',
        },
      },
      {
        type: blockNames.FormInput,
        props: {
          fieldName: 'lastname',
          isRequired: false,
          inputType: 'text',
          columns: '1',
          label: 'Last Name',
          requiredError: '',
          pattern: '',
          patternError: '',
        },
      },
      {
        type: blockNames.FormInput,
        props: {
          fieldName: 'email',
          isRequired: true,
          inputType: 'email',
          columns: '2',
          label: 'Email',
          requiredError: 'Email is required',
          pattern: '',
          patternError: '',
        },
      },
      {
        type: blockNames.FormTextArea,
        props: {
          fieldName: 'message',
          isRequired: false,
          columns: '2',
          label: 'Message',
          requiredError: '',
          pattern: '',
          patternError: '',
        },
      },
      {
        type: blockNames.FormCheckbox,
        props: {
          fieldName: 'privacy',
          isRequired: true,
          columns: '2',
          label: 'I accept the processing of my data',
          requiredError: 'Please, accept our privacy terms',
          pattern: '',
          patternError: '',
        },
      },
    ],
    'form-buttons': [
      {
        type: 'button',
        buttonType: 'submit',
        buttonColor: buttonColors.SKY.value,
        text: 'Send',
        variant: 'solid',
      },
    ],
  }),
}

export default FormBuilder
