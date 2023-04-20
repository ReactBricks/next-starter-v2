import React from 'react'
import { RichText, types } from 'react-bricks/frontend'

//=============================
// Local Types
//=============================

interface BoxNotesProps {
  notes: string
}

//=============================
// Component to be rendered
//=============================
const BoxNotes: types.Brick<BoxNotesProps> = ({}) => {
  return (
    <div className="mt-8 border-t border-[#707070] pt-[7px]">
      <RichText
        renderLink={(props) => (
          <a
            href={`#${props.href}`}
            className="text-[#018da0] text-[1.3rem] leading-[2rem] font-thin font-sans"
          >
            {props.children}
          </a>
        )}
        renderOL={(props) => (
          <ol className="list-decimal list-outside ml-5">{props.children}</ol>
        )}
        renderLI={(props) => (
          <li className="cursor-pointer text-[1.3rem] leading-[2rem] font-thin font-sans">
            {props.children}
          </li>
        )}
        renderBlock={(props: any) => (
          <p className="text-[1.3rem] leading-[2rem] font-thin font-sans">
            {props.children}
          </p>
        )}
        placeholder="Type a text..."
        propName="notes"
        allowedFeatures={[
          types.RichTextFeatures.Link,
          types.RichTextFeatures.OrderedList,
        ]}
      />
    </div>
  )
}

//=============================
// Brick Schema
//=============================
BoxNotes.schema = {
  name: 'box-notes',
  label: 'Box notes',
  hideFromAddMenu: true,
  //previewImageUrl: ``,
  getDefaultProps: () => ({}),
  sideEditProps: [],
}

export default BoxNotes
