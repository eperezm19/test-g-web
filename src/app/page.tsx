import { redirect } from "next/navigation";

export default function HomePage() {
  redirect(
    "https://appsip.genesisempresarial.com/AppSipWeb/CarteraCS/AppSip.apk"
  );

  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  );
}
