import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getProductData } from "./api/product";

export default function Batch({ product }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Single Batch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>DUMMYJSON.COM</h1>

        <div style={{ display: "inline-block", margin: "2rem 0" }}>
          <Link href={"/"}>Home</Link>
          <Link href={"/dashboard"} style={{ marginLeft: "2rem" }}>
            Dashboard
          </Link>
          <Link href={"/batch"} style={{ marginLeft: "2rem" }}>
            Batch
          </Link>
          <Link href={"/remote"} style={{ marginLeft: "2rem" }}>
            Remote fetch
          </Link>
        </div>

        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const product = await getProductData();
  return {
    props: {
      product,
    }, // will be passed to the page component as props
  };
}
