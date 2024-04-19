import { TopMenu } from "@/components/top-menu/TopMenu";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TopMenu />
      <main className="px-8">{children}</main>
    </div>
  );
}
