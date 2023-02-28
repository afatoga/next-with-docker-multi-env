import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!data.length) {
      fetch("/api/list")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [data, setData]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js on Docker!</h1>

        <div style={{ displa: "inline-block", marginTop: "2rem" }}>
          <Link href={"/"}>Home</Link>
          <Link href={"/dashboard"} style={{ marginLeft: "2rem" }}>
            Dashboard
          </Link>
        </div>

        <table style={{ marginTop: "2rem" }}>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
