// src/app/page.tsx
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Welcome to Beef Baby Diner!</h1>
        <p className={styles.subtitle}>Home of the Beef Babies</p>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Meet the Beef Babies</h2>
          <div className={styles.sectionContent}>
            <div className={styles.beefBabiesGrid}>
              {/* Add your Beef Babies here */}
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
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Beef Baby Adventures</h2>
          <div className={styles.sectionContent}>
            {/* Add your blog posts here */}
            <div className={styles.blogPost}>
              <h3 className={styles.blogPostTitle}>Adventure Title 1</h3>
              <p className={styles.blogPostDate}>Date of Adventure</p>
              <p className={styles.blogPostContent}>
                Write about your adventure here...
              </p>
            </div>
            {/* Repeat for each blog post */}
          </div>
        </div>
      </div>
    </main>
  );
}
