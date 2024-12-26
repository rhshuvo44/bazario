import Banner from "@/components/modules/home/Banner";
import Categories from "@/components/modules/home/Categories";
import Featured from "@/components/modules/home/Featured";
import Service from "@/components/modules/home/Service";

export default function Home() {
  return (
    <>
      <Banner />
      <Service />
      <Categories/>
      <Featured/>
    </>
  );
}
