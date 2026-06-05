import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const JOIN_STEPS = [
  {
    number: 1,
    title: 'Download Path of Titans',
    description: 'Get the game from the official Path of Titans website or your preferred platform.',
  },
  {
    number: 2,
    title: 'Launch the game',
    description: 'Start Path of Titans and log in or create your account.',
  },
  {
    number: 3,
    title: 'Open Community Servers',
    description: 'From the main menu, navigate to "Play" → "Community Servers".',
  },
  {
    number: 4,
    title: 'Search for Evergreen Garden',
    description: 'Use the search bar to find "Evergreen Garden" in the server list.',
  },
  {
    number: 5,
    title: 'Connect & explore',
    description: 'Select the server and click Join. Welcome to the garden!',
  },
];

function HeroSection(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroOverlay} />
      <div className={clsx('container', styles.heroContent)}>
        <img
          src="/img/logo.webp"
          alt="Evergreen Garden logo"
          className={styles.heroLogo}
        />
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <a
            className={clsx('button button--lg', styles.discordButton)}
            href="https://discord.gg/evergreengarden"
            target="_blank"
            rel="noreferrer">
            Join Discord
          </a>
          <Link
            className="button button--secondary button--lg"
            to="#how-to-join">
            How to Join
          </Link>
        </div>
      </div>
    </header>
  );
}

function HowToJoin(): ReactNode {
  return (
    <section id="how-to-join" className={styles.howToJoin}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          How to Join
        </Heading>
        <p className={styles.sectionSubtitle}>
          Follow these steps to start your journey in Evergreen Garden.
        </p>
        <div className={styles.stepList}>
          {JOIN_STEPS.map(({ number, title, description }) => (
            <div key={number} className={styles.stepCard}>
              <div className={styles.stepNumber}>{number}</div>
              <div className={styles.stepBody}>
                <strong>{title}</strong>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiscordCTA(): ReactNode {
  return (
    <section className={styles.discordCta}>
      <div className="container">
        <div className={styles.discordCard}>
          <i className={clsx('fa-brands fa-discord', styles.discordIcon)} />
          <Heading as="h2" className={styles.discordTitle}>
            Join our community
          </Heading>
          <p className={styles.discordText}>
            Connect with other players, stay up to date on events, and get help from our staff on Discord.
          </p>
          <a
            className={clsx('button button--lg', styles.discordButton)}
            href="https://discord.gg/evergreengarden"
            target="_blank"
            rel="noreferrer">
            Join Discord
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Evergreen Garden — a welcoming Path of Titans community server">
      <HeroSection />
      <main>
        <HowToJoin />
        <DiscordCTA />
      </main>
    </Layout>
  );
}
