import { Helmet } from "react-helmet";

function MetaData({ title }) {
    return (
        <Helmet>
            
            <title>{`${title} - shopify`}</title>
        </Helmet>
    )

}

export default MetaData