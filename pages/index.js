import AppLayout from "@com-layouts/AppLayout";

export default function Home() {
  return <h1 className="text-3xl font-bold underline p-3">Hello world!</h1>;
}

Home.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
