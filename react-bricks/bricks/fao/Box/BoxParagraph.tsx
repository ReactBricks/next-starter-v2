import React from 'react'
import { RichText, types } from 'react-bricks/frontend'
//=============================
// Local Types
//=============================

interface BoxParagraphProps {
  boxParagraph: string
}

//=============================
// Component to be rendered
//=============================
const BoxParagraph: types.Brick<BoxParagraphProps> = ({}) => {
  return (
    <RichText
      renderBlock={(props: any) => (
        <p className="font-thin font-sans text-[1.76rem] leading-[2.7rem]">
          {props.children}
        </p>
      )}
      renderLink={(props) => (
        <a href={`#${props.href}`} className="text-[#018da0]">
          {props.children}
        </a>
      )}
      placeholder="Type a text..."
      propName="boxParagraph"
      allowedFeatures={[types.RichTextFeatures.Link]}
    />
  )
}

//=============================
// Brick Schema
//=============================
BoxParagraph.schema = {
  name: 'box-paragraph',
  label: 'Box paragraph',
  hideFromAddMenu: true,
  //previewImageUrl: ``,
  getDefaultProps: () => ({
    boxParagraph:
      'Statistics are a core function of FAO. Since its foundation, FAO has been mandated to collect, compile, analyse and disseminate information relating to nutrition, food and agriculture through Article 1 of the FAO Constitution.1 The FAO statistical system plays an essential role in the fields of agriculture and food, supporting countries’ policies to eradicate hunger and promote the sustainable use of natural resources by making informed decisions through access to high-quality and comprehensive data. In particular, FAO provides the only source of global fisheries and aquaculture statistics, FishStat, which represents a unique global public good for sector analysis and monitoring. These statistics are structured within different data collections (production of capture fisheries and aquaculture, processing, trade, fleet, employment and consumption) freely accessible to users in different formats in a range of tools and products by country or country groups, species or species groups, harvest environment, etc. The year 2022 is a major milestone for FAO, as it marks the coverage of its fisheries and aquaculture statistics for the years 1950–2020 for the majority of its datasets – the longest time series of any statistical dataset published by FAO. A series of initiatives, including workshops and dedicated publications, will celebrate this major event, with the aim of improving interaction and engagement with Members and users in order to meet their needs.FAO fisheries and aquaculture statistics are based primarily on data collected annually from national sources through questionnaires specific to each dataset and country data. Every year countries are requested to provide data for the latest year, as well as validate and revise data for the most recent years. The quality of the FAO statistics is highly dependent upon the accuracy and reliability of the data collected and provided by countries. FAO strives to validate and ensure the quality of official data received. These statistics are carefully analysed and cross-checked with different datasets and other available information. When anomalies or gaps in the data are identified, FAO interacts with countries to explore these issues and find ways to resolve them in collaboration with the countries concerned in order to ensure consistency in the dissemination of official data.',
  }),
  sideEditProps: [],
}

export default BoxParagraph