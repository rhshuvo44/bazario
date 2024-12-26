import Banner from "@/components/modules/home/Banner";
import Categories from "@/components/modules/home/Categories";
import Famous from "@/components/modules/home/Famous";
import Featured from "@/components/modules/home/Featured";
import Service from "@/components/modules/home/Service";

export default function Home() {
  return (
    <>
      <Banner />
      <Service />
      <Categories />
      <Featured />
      <Famous />
    </>
  );
}
