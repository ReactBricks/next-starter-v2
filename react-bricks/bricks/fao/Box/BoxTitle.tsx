import React from 'react'
import { Text, types } from 'react-bricks/frontend'
import classNames from 'classnames'
//=============================
// Local Types
//=============================
interface BoxTitleProps {
  index: number
  boxTitle: string
  boxName: string
  box: boolean
}

//=============================
// Component to be rendered
//=============================
const BoxTitle: types.Brick<BoxTitleProps> = ({ box }) => {
  return (
    <h3 className="font-bold font-title text-[1.8rem] uppercase leading-[2.2rem] border-b border-white py-8 mb-4 flex">
      <Text
        propName="boxName"
        placeholder="title.."
        renderBlock={({ children }) => (
          <div
            className={classNames(
              box ? 'block' : 'hidden',
              'px-[7px] min-w-[30px] align-middle mr-[8px] font-bold leading-[0.9em] pb-[2px] uppercase text-white bg-[#018da0]'
            )}
          >
            {children}
          </div>
        )}
      />

      <Text
        multiline={true}
        propName="boxTitle"
        placeholder="title.."
        renderBlock={({ children }) => (
          <div className="min-w-[70px]">{children}</div>
        )}
      />
    </h3>
  )
}

//=============================
// Brick Schema
//=============================
BoxTitle.schema = {
  name: 'box-title',
  label: 'Box title',
  hideFromAddMenu: true,
  //previewImageUrl: ``,
  getDefaultProps: () => ({
    boxName: 'BOX 1',
    boxTitle:
      'MORE THAN SEVEN DECADES OF FAO FISHERIES AND AQUACULTURE STATISTICS: 1950-2020',
    box: true,
  }),
  sideEditProps: [
    {
      name: 'box',
      label: 'With box',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default BoxTitle
