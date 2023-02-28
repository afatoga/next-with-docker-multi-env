import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Batch({ batch }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Single Batch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Single Batch</h1>

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

        <h1>id: {batch.id}</h1>
        <h2>Tracks:</h2>
        <table>
          <tbody>
            {batch.tracks.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
              </tr>
            ))}
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

export async function getServerSideProps(context) {
  return {
    props: {
      batch: {
        id: "2c3f63e3-27b3-429f-9bac-339acc0c1767",
        createdAt: "2023-02-24T09:19:59+01:00",
        name: "kkk",
        taggingStartedAt: "2023-02-24T09:36:43+01:00",
        taggingCompletedAt: "2023-02-24T08:36:51+01:00",
        lastExportedAt: null,
        lastExtendedAt: "2023-02-24T09:37:09+01:00",
        lastTagChangedAt: null,
        tracks: [
          {
            id: "be7bffc0-6384-445a-9b54-4d7bfdbad05b",
            createdAt: "2023-02-24T09:36:25+01:00",
            title: "sample-small.mp3",
            tags: {
              bpm: 148,
              key: ["C major"],
              moods: ["driving", "futuristic", "energetic"],
              genres: ["indie rock"],
              usages: ["drama", "action", "science", "youth"],
              vocals: ["instrumental"],
              decades: ["2010s"],
              instruments: ["drums"],
            },
            filesize: 52079,
            duration: 3,
            processedAt: "2023-02-24T08:36:51+01:00",
            hookUrl:
              "https://api.com/track/decrement-credits/be7bffc0-6384-445a-9b54-4d7bfdbad05b",
            modelVersion: "e6296f",
            queuedAt: "2023-02-24T09:36:43+01:00",
            batchId: "2c3f63e3-27b3-429f-9bac-339acc0c1767",
          },
          {
            id: "49e06921-d5d7-4e44-9295-af8a44bd4079",
            createdAt: "2023-02-24T09:36:00+01:00",
            title: "sample-small.mp3",
            tags: {
              bpm: 148,
              key: ["C major"],
              moods: ["driving", "futuristic", "energetic"],
              genres: ["indie rock"],
              usages: ["drama", "action", "science", "youth"],
              vocals: ["instrumental"],
              decades: ["2010s"],
              instruments: ["drums"],
            },
            filesize: 52079,
            duration: 3,
            processedAt: "2023-02-24T08:36:51+01:00",
            hookUrl:
              "https://api.com/track/decrement-credits/49e06921-d5d7-4e44-9295-af8a44bd4079",
            modelVersion: "e6296f",
            queuedAt: "2023-02-24T09:36:43+01:00",
            batchId: "2c3f63e3-27b3-429f-9bac-339acc0c1767",
          },
          {
            id: "38e2683d-57a8-4cbb-bfba-f88cff0af743",
            createdAt: "2023-02-24T09:36:29+01:00",
            title: "sample-small.mp3",
            tags: {
              bpm: 148,
              key: ["C major"],
              moods: ["driving", "futuristic", "energetic"],
              genres: ["indie rock"],
              usages: ["drama", "action", "science", "youth"],
              vocals: ["instrumental"],
              decades: ["2010s"],
              instruments: ["drums"],
            },
            filesize: 52079,
            duration: 3,
            processedAt: "2023-02-24T08:36:47+01:00",
            hookUrl:
              "https://api.com/track/decrement-credits/38e2683d-57a8-4cbb-bfba-f88cff0af743",
            modelVersion: "e6296f",
            queuedAt: "2023-02-24T09:36:43+01:00",
            batchId: "2c3f63e3-27b3-429f-9bac-339acc0c1767",
          },
          {
            id: "609c8c27-ac57-4aa5-86da-c712b3f7ebaf",
            createdAt: "2023-02-24T09:35:55+01:00",
            title: "sample-small.mp3",
            tags: {
              bpm: 148,
              key: ["C major"],
              moods: ["driving", "futuristic", "energetic"],
              genres: ["indie rock"],
              usages: ["drama", "action", "science", "youth"],
              vocals: ["instrumental"],
              decades: ["2010s"],
              instruments: ["drums"],
            },
            filesize: 52079,
            duration: 3,
            processedAt: "2023-02-24T08:36:47+01:00",
            hookUrl:
              "https://api.com/track/decrement-credits/609c8c27-ac57-4aa5-86da-c712b3f7ebaf",
            modelVersion: "e6296f",
            queuedAt: "2023-02-24T09:36:43+01:00",
            batchId: "2c3f63e3-27b3-429f-9bac-339acc0c1767",
          },
          {
            id: "6c9e9e7a-5774-46ae-9c8a-a2cb22895db8",
            createdAt: "2023-02-24T09:36:09+01:00",
            title: "sample-small.mp3",
            tags: {
              bpm: 148,
              key: ["C major"],
              moods: ["driving", "futuristic", "energetic"],
              genres: ["indie rock"],
              usages: ["drama", "action", "science", "youth"],
              vocals: ["instrumental"],
              decades: ["2010s"],
              instruments: ["drums"],
            },
            filesize: 52079,
            duration: 3,
            processedAt: "2023-02-24T08:36:47+01:00",
            hookUrl:
              "https://api.com/track/decrement-credits/6c9e9e7a-5774-46ae-9c8a-a2cb22895db8",
            modelVersion: "e6296f",
            queuedAt: "2023-02-24T09:36:43+01:00",
            batchId: "2c3f63e3-27b3-429f-9bac-339acc0c1767",
          },
          {
            id: "083be61c-ad61-4db9-abf7-7bbbee79f6c0",
            createdAt: "2023-02-24T09:36:03+01:00",
            title: "sample-small.mp3",
            tags: {
              bpm: 148,
              key: ["C major"],
              moods: ["driving", "futuristic", "energetic"],
              genres: ["indie rock"],
              usages: ["drama", "action", "science", "youth"],
              vocals: ["instrumental"],
              decades: ["2010s"],
              instruments: ["drums"],
            },
            filesize: 52079,
            duration: 3,
            processedAt: "2023-02-24T08:36:46+01:00",
            hookUrl:
              "https://api.com/track/decrement-credits/083be61c-ad61-4db9-abf7-7bbbee79f6c0",
            modelVersion: "e6296f",
            queuedAt: "2023-02-24T09:36:43+01:00",
            batchId: "2c3f63e3-27b3-429f-9bac-339acc0c1767",
          },
          {
            id: "e639b593-3bc2-436d-8f0b-3caa0404a69b",
            createdAt: "2023-02-24T09:36:21+01:00",
            title: "sample-small.mp3",
            tags: {
              bpm: 148,
              key: ["C major"],
              moods: ["driving", "futuristic", "energetic"],
              genres: ["indie rock"],
              usages: ["drama", "action", "science", "youth"],
              vocals: ["instrumental"],
              decades: ["2010s"],
              instruments: ["drums"],
            },
            filesize: 52079,
            duration: 3,
            processedAt: "2023-02-24T08:36:47+01:00",
            hookUrl:
              "https://api.com/track/decrement-credits/e639b593-3bc2-436d-8f0b-3caa0404a69b",
            modelVersion: "e6296f",
            queuedAt: "2023-02-24T09:36:43+01:00",
            batchId: "2c3f63e3-27b3-429f-9bac-339acc0c1767",
          },
          {
            id: "1c834d5e-1476-4405-bf51-b1e275694cfa",
            createdAt: "2023-02-24T09:36:14+01:00",
            title: "sample-small.mp3",
            tags: {
              bpm: 148,
              key: ["C major"],
              moods: ["driving", "futuristic", "energetic"],
              genres: ["indie rock"],
              usages: ["drama", "action", "science", "youth"],
              vocals: ["instrumental"],
              decades: ["2010s"],
              instruments: ["drums"],
            },
            filesize: 52079,
            duration: 3,
            processedAt: "2023-02-24T08:36:51+01:00",
            hookUrl:
              "https://api.com/track/decrement-credits/1c834d5e-1476-4405-bf51-b1e275694cfa",
            modelVersion: "e6296f",
            queuedAt: "2023-02-24T09:36:43+01:00",
            batchId: "2c3f63e3-27b3-429f-9bac-339acc0c1767",
          },
        ],
      },
    }, // will be passed to the page component as props
  };
}
