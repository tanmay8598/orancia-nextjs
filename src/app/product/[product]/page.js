import apiClient from "@/api/client";
import apiclient from "@/api/client";
import ProductDetail from "@/components/Product/ProductDetail";


export async function generateMetadata({ params }) {
  const groupId = params.product;
  const { data } = await apiClient.get(`/product/get-by-groupid`, {
    groupId,
  });


  return {
    title: data[0]?.metaTitle,
    description: data[0]?.metaDescription,
    openGraph: {
      images: [String(data[0]?.image[0])],
    },
  };
}

const page = ({ params }) => {
  const groupId = params.product;

  return (
    <>
      <ProductDetail productId={groupId} />
    </>
  );
};

export default page;
