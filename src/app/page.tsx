'use client'
// src/app/page.tsx
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from 'react';

let BEEF_BABIES = [
  {
    name: "Andre",
    bio: "Portillos lover, piano player, 3 fluffy cats",
    image: "/beefs/andre.png"
  },
  {
    name: "Emma",
    bio: "House head!!",
    image: "/beefs/emma.png"
  },
  {
    name: "Quincy",
    bio: "A coder, a mathematician, and a friend to all",
    image: "/beefs/quincy.png"
  },
  {
    name: "Riley",
    bio: "Inventor of the hit app \"music league\"",
    image: "/beefs/riley.png"
  },
  {
    name: "Jimmy",
    bio: "Master of spanish, veteran in beans, outlaw in peru",
    image: "/beefs/jimmy.png"
  },
]

export default function Home() {
  const [decoyActivated, setDecoyActivated] = useState(false);
  const [babyIndex, setBabyIndex] = useState(-1);

  useEffect(() => {
    // Check if the count exists in local storage
    const storedCount = localStorage.getItem('count');

    if (storedCount) {
      // If the count exists, parse it as an integer and increment it
      const incrementedCount = (parseInt(storedCount, 10) + 1) % BEEF_BABIES.length;
      setBabyIndex(incrementedCount);
      localStorage.setItem('count', incrementedCount.toString());
    } else {
      // If the count doesn't exist, generate a random number and store it in local storage
      const randomNumber = Math.floor(Math.random() * 100) % BEEF_BABIES.length;
      setBabyIndex(randomNumber);
      localStorage.setItem('count', randomNumber.toString());
    }
  }, []); // Empty dependency array ensures this runs only on the first render

  console.log(babyIndex)
  const baby = babyIndex !== -1 ? BEEF_BABIES[babyIndex] : {
    name: "Loading...",
    bio: "Loading...",
    image: "/beefs/blank.png"
  };

  const tvGuide = <>
    <h2 className={styles.sectionTitle}>Beef TV</h2>
    <div className={styles.sectionContent}>
      <p>Watch movies and shows: <a href="https://watch.beef.baby">watch.beef.baby</a></p>
      <p>Request movies and shows: <a href="https://request.beef.baby">request.beef.baby</a></p>
      <p><b>Requires an account!</b></p>
      <p>To watch on your phone, use the <a href="https://apps.apple.com/us/app/swiftfin/id1604098728">Swiftfin app</a> and put &quot;http<b>s</b>://watch.beef.baby&quot; as the url. </p>
    </div>
  </>;

  const decoy = <>
    <h2 className={styles.sectionTitle}>Beef Directory</h2>
    <div className={styles.sectionContent}>
      <p><a href="https://felt.com/map/Chicago-Zone-dkNR1xgkTS9B4eXXXxpwnPA?loc=41.8833,-87.6384,11.34z&share=1">Cool stuff in Chicago map</a></p>
      <p><a href="https://www.instagram.com/the_trees_will_return/?hl=en-gb">The Trees Will Return</a></p>
      <p><a href="https://sexandchicago.substack.com/">Andre&apos;s Substack</a></p>
      If you want anything added to the directory, let me know!

    </div>
  </>;

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Beef Baby Diner</h1>
        <p className={styles.subtitle}>Home of the Beef Baby!</p>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          {decoyActivated ? tvGuide : decoy}
        </div>
        <div className={styles.sectionImage}>
          <Image
            src="/burger.png"
            alt="Image"
            width={200}
            height={200}
            onClick={() => setDecoyActivated(!decoyActivated)}
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
            <div className={styles.beefBabiesGrid}>
              <div className={styles.beefBaby}>
                <Image
                  src={baby.image}
                  alt={`headshot of ${baby.name}`}
                  width={150}
                  height={150}
                  className={styles.beefBabyImage}
                />
                <div className={styles.beefBabyBio}>
                  <h3 className={styles.beefBabyName}>{baby.name}</h3>
                  <p className={styles.beefBabyBio}>{baby.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section} style={{ "gridColumn": "span 5" }}>
          <h2 className={styles.sectionTitle}>Recent Beef Adventures</h2>
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
