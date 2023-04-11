import React from 'react'
import { types, Text, RichText } from 'react-bricks/frontend'

//=============================
// Local Types
//=============================
interface ParagraphProps {}

//=============================
// Component to be rendered
//=============================
const Paragraph: types.Brick<ParagraphProps> = () => {
  return (
    <>
      {/* <Text
        renderBlock={(props) => <h3>{props.children}</h3>}
        placeholder="Chapter name..."
        propName="chapterName"
      /> */}

      <RichText
        renderH3={({ children, attributes }) => (
          <h3 className="font-bold text-blue-900">{children}</h3>
        )}
        renderBlock={(props: any) => (
          <p className="text-lg sm:text-xl text-center">{props.children}</p>
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
    </>
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
