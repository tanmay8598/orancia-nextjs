import apiclient from "@/api/client";
import BlogContent from "@/components/Blog/BlogContent";
// import { useParams } from "next/navigation";

export async function generateMetadata({ params }) {
  // const params = useParams();
  console.log(params, "params");
  const blogid = params.myblogDetail;
  const { data } = await apiclient.get(`/blog/blogbyid/${blogid}`);
  console.log(blogid, "blog");

  return {
    title: data?.mtitle,

    description: data?.mdesc,

    openGraph: {
      images: [String(data?.image)],
    },
  };
}

const page = ({ params }) => {
  // console.log(params, "data ");
  const blogid = params.myblogDetail;
  console.log(blogid, "blog");
  return (
    <>
      {/* vimal */}
      <BlogContent blogid={blogid} />
    </>
  );
};

export default page;
