import apiclient from "@/api/client";
import BlogContent from "@/components/Blog/BlogContent";
// import { useParams } from "next/navigation";

export async function generateMetadata({ params }) {
  const blogid = params.blogDetails;
  const { data } = await apiclient.get(`/blog/blogbyid/${blogid}`);

  return {
    title: data?.mtitle,

    description: data?.mdesc,

    openGraph: {
      images: [String(data?.image)],
    },
  };
}

const page = ({ params }) => {
  const blogid = params;

  return (
    <>
      <BlogContent blogid={blogid} />
    </>
  );
};

export default page;
