import React from 'react'
import { types, RichText } from 'react-bricks/frontend'

//=============================
// Local Types
//=============================
interface ParagraphProps {
  anchorName: string
}

//=============================
// Component to be rendered
//=============================
const Paragraph: types.Brick<ParagraphProps> = ({ anchorName }) => {
  return (
    <div className="w-full flex">
      <div className="mx-auto max-w-[680px] float-left flex-1">
        <RichText
          renderH3={({ children, attributes }) => (
            <h3
              className="pt-24 text-[2.4rem] leading-[2.4rem] font-extrabold font-title text-[#018da0] mt-12 mb-4 relative uppercase"
              id={anchorName}
            >
              {children}
            </h3>
          )}
          renderBlock={(props: any) => (
            <p className="pb-24 font-[merriweather,serif;] font-light leading-[28px] text-[16px]">
              {props.children}
            </p>
          )}
          renderLink={(props: any) => (
            <a
              href={props.href}
              className="font-semibold font-title text-[#018da0]"
            >
              {props.children}
            </a>
          )}
          placeholder="Type a text..."
          propName="text"
          allowedFeatures={[
            types.RichTextFeatures.Heading3,
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Italic,
            types.RichTextFeatures.Code,
            types.RichTextFeatures.Highlight,
            types.RichTextFeatures.Link,
            types.RichTextFeatures.UnorderedList,
            types.RichTextFeatures.Quote,
          ]}
        />
      </div>
    </div>
  )
}

//=============================
// Brick Schema
//=============================
Paragraph.schema = {
  name: 'paragraph',
  label: 'Paragraph',
  //previewImageUrl: ``,
  getDefaultProps: () => ({}),
  sideEditProps: [
    {
      name: 'anchorName',
      label: 'Anchor Name',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default Paragraph
