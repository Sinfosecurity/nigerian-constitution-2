import LoginPage from "@/components/LoginPage";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <div>
        <Head>
          <title>The Nigerian Constitution Hub</title>
          <meta property="og:title" content="The Nigerian Constitution Hub" />
          <meta
            property="og:description"
            content="Explore the Nigerian constitution, seek legal advice, and chat with AI powered assistant for better understanding."
          />
          <meta property="og:image" content="/constitution.PNG" />
          <meta
            property="og:url"
            content="https://nigerian-constitution-2.vercel.app/login"
          />
          <meta property="og:type" content="website" />
        </Head>

        {/* Your login UI */}
        <LoginPage />
      </div>
    </>
  );
}
