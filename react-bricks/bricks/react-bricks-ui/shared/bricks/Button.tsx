import * as React from 'react'
import classNames from 'classnames'
import { Text, Link, types, useAdminContext } from 'react-bricks/frontend'
import blockNames from '../../blockNames'
import { buttonColors } from '../../colors'
import { buttonColorsEditProps } from '../../LayoutSideProps'

export interface ButtonProps {
  type: 'button' | 'link'
  text: string
  href: string
  isTargetBlank: boolean
  buttonType: 'submit' | 'button' | 'reset'
  buttonColor: {
    color: string
    classNameSolid: string
    classNameOutline: string
    classNameGhost: string
  }
  variant: 'solid' | 'outline' | 'ghost'
  padding: 'normal' | 'small'
  className?: string
  simpleAnchorLink: boolean
  buttonText: types.TextValue
  disabled?: boolean
}

const Button: types.Brick<ButtonProps> = ({
  type,
  href,
  isTargetBlank,
  buttonType,
  buttonColor,
  variant,
  padding,
  className,
  simpleAnchorLink = false,
  buttonText,
  disabled = false
}) => {
  const target = isTargetBlank
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  if (type === 'link') {
    return (
      <Link
        href={href}
        {...target}
        className={classNames(
          'inline-block whitespace-nowrap text-center rounded-full font-bold leading-none hover:shadow-lg transition-all ease-out duration-150 hover:-translate-y-0.5',
          padding === 'small'
            ? 'py-2 px-4 text-sm min-w-[75px]'
            : 'py-3 px-5 min-w-[120px]',
          {
            [buttonColor?.classNameSolid]: variant === 'solid',
          },
          {
            [buttonColor?.classNameOutline]: variant === 'outline',
          },
          {
            [buttonColor?.classNameGhost]: variant === 'ghost',
          },
          className
        )}
        simpleAnchor={simpleAnchorLink}
      >
        <Text
          propName="text"
          placeholder="Action"
          value={buttonText}
          renderBlock={({ children }) => <span>{children}</span>}
        />
      </Link>
    )
  }

  // Button
  const { isAdmin, previewMode } = useAdminContext()

  return (
    <button
      type={isAdmin && !previewMode ? 'button' : buttonType}
      disabled={disabled}
      //disabled={isAdmin && !previewMode}
      className={classNames(
        'inline-block whitespace-nowrap text-center rounded-full font-bold leading-none hover:shadow-lg transition-all ease-out duration-150 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed',
        padding === 'small'
          ? 'py-2 px-4 text-sm min-w-[75px]'
          : 'py-3 px-5 min-w-[120px]',
        {
          [buttonColor?.classNameSolid]: variant === 'solid',
        },
        {
          [buttonColor?.classNameOutline]: variant === 'outline',
        },
        {
          [buttonColor?.classNameGhost]: variant === 'ghost',
        },
        className
      )}
    >
      <Text
        propName="text"
        placeholder="Action"
        value={buttonText}
        renderBlock={({ children }) => <span>{children}</span>}
      />
    </button>
  )
}

Button.schema = {
  name: blockNames.Button,
  label: 'Button',
  category: 'shared',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/shared/Button.tsx',

  getDefaultProps: () => ({
    type: 'link',
    text: 'Click me',
    href: '',
    isTargetBlank: false,
    buttonType: 'submit',
    buttonColor: buttonColors.SKY.value,
    variant: 'solid',
    padding: 'normal',
  }),
  sideEditProps: [
    {
      groupName: 'Button functionality',
      defaultOpen: true,
      props: [
        {
          name: 'type',
          label: 'Type',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'link', label: 'Link' },
              { value: 'button', label: 'Form Button' },
            ],
          },
        },
        {
          name: 'href',
          label: 'Link (external or path)',
          type: types.SideEditPropType.Text,
          show: (props) => props.type === 'link',
        },
        {
          name: 'isTargetBlank',
          label: 'Open in new window',
          type: types.SideEditPropType.Boolean,
          show: (props) => props.type === 'link',
        },
        {
          name: 'simpleAnchorLink',
          label: 'Simple anchor (no SPA link)',
          type: types.SideEditPropType.Boolean,
          show: (props) => props.type === 'link',
        },
        {
          name: 'buttonType',
          label: 'Button type',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'submit', label: 'Form submit' },
              { value: 'reset', label: 'Form reset' },
              { value: 'button', label: 'Button' },
            ],
          },
          show: (props) => props.type === 'button',
        },
      ],
    },
    {
      groupName: 'Visual',
      defaultOpen: true,
      props: [
        buttonColorsEditProps,
        {
          name: 'variant',
          label: 'Variant',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'solid', label: 'Solid' },
              { value: 'outline', label: 'Outline' },
              { value: 'ghost', label: 'Ghost' },
            ],
          },
        },
        {
          name: 'padding',
          label: 'Size',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'normal', label: 'Normal' },
              { value: 'small', label: 'Small' },
            ],
          },
        },
      ],
    },
  ],
}

export default Button
