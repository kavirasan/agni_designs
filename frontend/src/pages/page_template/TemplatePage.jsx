import React from "react";
import CustomBanner from "../../components/CustomBanner";
import ContentDescription from "../../components/template_components/ContentDescription";
import CardList from "../../components/template_components/CardList";
import CaseStudy from "../../components/template_components/CaseStudy";

const TemplatePage = (props) => {
  const {
    Cbtitle,
    CbDescription,
    descriptionTitle,
    descriptionPara,
    CardTitle,
    CardData,
    CsTitle,
    CsPara,
  } = props;
  return (
    <div>
      <div>
        <CustomBanner
          // image={bim}
          // image={}
          // title="Get Our Quote"
          title={Cbtitle}
          // description="This layout will provide a comprehensive, professional, and user-friendly experience for visitors. The content should emphasize your expertise, quality of service, and sustainable design practices, creating a solid impression of AGNI Design Consultants as a leader in MEP design and BIM services."
          description={CbDescription}
        />
      </div>
      <ContentDescription
        descriptionTitle={descriptionTitle}
        descriptionPara={descriptionPara}
      />
      <div>
        <CardList
          CardTitle={CardTitle}
          CardData={CardData}
          //CardData is json object for card
        />
      </div>
      <div>
        <CaseStudy CsTitle={CsTitle} CsPara={CsPara} />
      </div>
    </div>
  );
};

export default TemplatePage;
