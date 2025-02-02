import { Helmet } from "react-helmet";

function AgniDesignSEO({ title, description, keywords, canonical }) {
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
}

export default AgniDesignSEO;
