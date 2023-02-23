import AppLayout from "@com-layouts/AppLayout";

export default function Home() {
  return (
    <h1 className="p-3 mt-10 text-xl font-bold text-center">
      به سامانه تنظیم لوح نگهبانی خوش آمدید.
    </h1>
  );
}

Home.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
