import axios from "axios";
import Head from "next/head";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  function getAuthRoute() {
    axios.get("/api/auth").then((res) => {
      console.log(res);
    });
  }

  return (
    <>
      <Head>
        <title>Saimon - BUGBLTZ-21</title>
        <meta name="description" content="Debugando tudo." />
      </Head>
      <div>
        <main>DEBUG - {code && JSON.stringify(code)}</main>
      </div>
    </>
  );
}
