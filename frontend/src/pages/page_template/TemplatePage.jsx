import React from "react";
import CustomBanner from "../../components/CustomBanner";
import ContentDescription from "../../components/template_components/ContentDescription";
import CardList from "../../components/template_components/CardList";
import CaseStudy from "../../components/template_components/CaseStudy";
import bim from "../../assets/new_agni_images/6.png"

const TemplatePage = (props) => {
  const {
    CbImg,
    Cbtitle,
    CbDescription,
    descriptionTitle,
    descriptionPara,
    CardTitle,
    CardData,
    CardTitle1,
    CardData1,
    CsTitle,
    CsPara,
    CsImg,
  } = props;
  
  return (
    <div>
      <div>
        <CustomBanner
          image={CbImg}
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
        <CardList
          CardTitle={CardTitle1}
          CardData={CardData1}
          //CardData is json object for card
        />
      </div>
      <div>
        <CaseStudy CsTitle={CsTitle} CsPara={CsPara} CsImg={CsImg} />
      </div>
    </div>
  );
};

export default TemplatePage;
