import { redirect } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function UrlSlugPage({ params }: Props) {
  redirect(
    "https://appsip.genesisempresarial.com/AppSipWeb/CarteraCS/AppSip.apk"
  );

  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  );
}
