// src/app/page.tsx
import Image from "next/image";
import styles from "./page.module.css";

let BEEF_BABIES = [
  {
    name: "Andre",
    bio: "Born in the beef, moulded by it... I didn't see the milk until I was already a man.",
    image: "/beefs/andre.jpg"
  },
  {
    name: "Quincy",
    bio: "Coder and mathematician extraordinaire",
    image: "/beefs/quincy.jpg"
  },
]

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Beef Baby Diner</h1>
        <p className={styles.subtitle}>Home of the Beef Baby!</p>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Beef TV</h2>
          <div className={styles.sectionContent}>
            <p>Watch movies and shows: <a href="https://watch.beef.baby">watch.beef.baby</a></p>
            <p>Request movies and shows: <a href="https://request.beef.baby">request.beef.baby</a></p>
          </div>
        </div>
        <div className={styles.sectionImage}>
          <Image
            src="/burger.png"
            alt="Image"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.sectionImage}>
          <Image
            src="/fries.png"
            alt="Image"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Beef of the Day</h2>
          <div className={styles.sectionContent}>
            {/* Add your Beef Babies here */}
            <div className={styles.beefBabiesGrid}>
              <div className={styles.beefBaby}>
                <Image
                  src="/path/to/baby1.jpg"
                  alt="Beef Baby 1"
                  width={150}
                  height={150}
                  className={styles.beefBabyImage}
                />
                <h3 className={styles.beefBabyName}>Baby Name 1</h3>
                <p className={styles.beefBabyBio}>Brief bio or fun fact</p>
              </div>
              {/* Repeat for each Beef Baby */}
            </div>
          </div>
        </div>
        <div className={styles.section} style={{ "gridColumn": "span 5" }}>
          <h2 className={styles.sectionTitle}>Beef Baby Adventures</h2>
          <div className={styles.sectionContent}>
            {/* Add your blog posts here */}
            <div className={styles.blogPost}>
              <h3 className={styles.blogPostTitle}>Trip to Marquette</h3>
              <p className={styles.blogPostDate}>April 20, 2024</p>
              <p className={styles.blogPostContent}>
                <Image
                  src="/adventure/marquette.jpg"
                  alt="Image"
                  width={600}
                  height={600}
                />
              </p>
            </div>
            {/* Repeat for each blog post */}
          </div>
        </div>
      </div>
    </main>
  );
}
