import React from 'react'
import { Text, types } from 'react-bricks/frontend'

//=============================
// Local Types
//=============================
interface BoxTitleProps {
  index: number
  boxTitle: string
  boxName: string
}

//=============================
// Component to be rendered
//=============================
const BoxTitle: types.Brick<BoxTitleProps> = ({}) => {
  return (
    <h3 className="font-bold font-[trade-gothic-next-condensed,sans-serif] text-[1.8rem] uppercase leading-[2.2rem] border-b border-white py-8 mb-4">
      <div className="float-left">
        {' '}
        <Text
          propName="boxName"
          placeholder="name.."
          renderBlock={({ children }) => (
            <span className="px-[7px] align-middle mr-[8px] font-bold leading-[0.9em] uppercase text-white bg-[#018da0]">
              {children}
            </span>
          )}
        />
      </div>

      <div>
        <Text
          multiline={true}
          propName="boxTitle"
          placeholder="title.."
          renderBlock={({ children }) => <>{children}</>}
        />
      </div>
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
  }),
  sideEditProps: [],
}

export default BoxTitle
