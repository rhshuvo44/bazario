import Banner from "@/components/modules/home/Banner";
import Categories from "@/components/modules/home/Categories";
import Famous from "@/components/modules/home/Famous";
import Featured from "@/components/modules/home/Featured";
import HomeMarquee from "@/components/modules/home/HomeMarquee";
import Popular from "@/components/modules/home/Popular";
import Service from "@/components/modules/home/Service";
import Special from "@/components/modules/home/Special";

export default function Home() {
  return (
    <>
      <Banner />
      <Service />
      <Categories />
      <Featured />
      <Famous />
      <Special />
      <Popular />
      <HomeMarquee />
    </>
  );
}
