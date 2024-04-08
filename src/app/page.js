import Banner from "@/components/Banner/Banner";
import BestSellers from "@/components/BestSellers/BestSellers";
import BlogHero from "@/components/Blog/BlogHero";
import Heading from "@/components/Heading/Heading";
import Hero from "@/components/Hero/Hero";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import SingleBanner from "@/components/SingleBanner/SingleBanner";

const data = [
  {
    img: "https://st4prdbebeautiful4s4ci.blob.core.windows.net/www-bebeautiful-in/right-technique-to-apply-skincare-products_mobilehome.jpg",
  },
  {
    img: "https://assets.vogue.in/photos/625fcebf12fcfd42bba69f6e/1:1/w_1080,h_1080,c_limit/Exclusive-%20Kate%20Moss%20and%20Mariah%20Carey's%20favourite%20sustainable%20haircare%20brand's%20salon%20is%20launching%20in%20India%20.jpg",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSANCLA59PX0B9YC81TeqaTsKG1RPaTvPv1Zw&usqp=CAU",
  },
  {
    img: "https://www.visitberlin.de/system/files/styles/visitberlin_content_image_medium_visitberlin_mobile_1x/private/image/Naturkosmetik_GettyImages-697674828_c_nerudol_web_0.jpg?itok=_6Uj0Wir",
  },
];

export default function Home() {
  return (
    <div>
      {/* <div className="max-container"> */}
      <Banner />
      <BestSellers />
      {/* <SingleBanner data={data} />
      <SingleBanner data={data2} /> */}
      <ImageGallery data={data} />
      <Hero />
      <BlogHero />
    </div>
  );
}
