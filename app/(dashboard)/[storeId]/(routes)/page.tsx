import db from "@/lib/db";

interface DashboardPageProps {
  params: { storeId: string }
}

const DasboardPage = async ({ params }: DashboardPageProps) => {
  const { storeId } = await params;
  const store = await db.store.findFirst({
    where: {
      //   id: params.storeId,
      id: storeId,
    },
  });
  return <div>Active Store = {store?.name}</div>;
};
export default DasboardPage;
