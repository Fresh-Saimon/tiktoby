import axios from "axios";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [response, setResponse] = useState(null);

  function getAuthRoute(_code) {
    axios.get(`/api/auth?code=${_code}`).then(({ data }) => {
      console.log(data);
      setResponse(data);
    });
  }
  useEffect(() => {
    if (code) {
      getAuthRoute(code);
    }
  }, [code]);

  if (!code) {
    return (
      <main>
        <h1>BUGBLITZ-21</h1>
        <p>Debugando tudo.</p>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>Saimon - BUGBLTZ-21</title>
        <meta name="description" content="Debugando tudo." />
      </Head>
      <div>
        <main>
          <div>DEBUG - {code && JSON.stringify(code)}</div>
          <div>Response - {JSON.stringify(response)}</div>
        </main>
      </div>
    </>
  );
}
