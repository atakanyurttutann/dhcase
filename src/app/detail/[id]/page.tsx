import { packageData } from "@/data/data";
import DetailView from "@/view/DetailView";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: number };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = packageData.find((q) => q.id == params.id);
  return {
    title: data?.name,
    description: data?.description,
  };
}
const DetailPage = () => {
  return <DetailView />;
};

export default DetailPage;
