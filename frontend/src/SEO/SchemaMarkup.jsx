import { Helmet } from "react-helmet";

function SchemaMarkup({ data }) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SchemaMarkup;
