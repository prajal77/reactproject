import { useParams } from "react-router-dom";

const BrandDetail = () => {
    let params = useParams();
    return (
        <>
            BrandDetail  {params.slug}
        </>
    )
}

export default BrandDetail; 