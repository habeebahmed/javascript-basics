import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Welcome to the React Styling Assignment
        </h1>
        <p className={styles.subtitle}>
          Explore and enhance your styling skills!
        </p>
      </header>

      <section className={styles.content}>
        <article className={styles.article}>
          <h2 className={styles.articleTitle}>Article 1</h2>
          <p className={styles.articleContent}>
            The art of web design is a unique and creative medium that combines
            visual aesthetics with functional utility. As designers, we strive
            to create experiences that are not only visually appealing but also
            intuitive and user-friendly. This article delves into the principles
            of modern web design, exploring the balance between form and
            function, and how to craft websites that resonate with users on a
            deeper level.
          </p>
        </article>

        <article className={styles.article}>
          <h2 className={styles.articleTitle}>Article 2</h2>
          <p className={styles.articleContent}>
            In the ever-evolving world of technology, staying ahead of the curve
            is crucial. This article explores the latest trends in software
            development, from cutting-edge programming languages to innovative
            development methodologies. We'll discuss how these advancements are
            shaping the future of the tech industry and what developers can do
            to stay relevant and competitive in this dynamic landscape.
          </p>
        </article>

        <article className={styles.article}>
          <h2 className={styles.articleTitle}>Article 3</h2>
          <p className={styles.articleContent}>
            Sustainability in architecture goes beyond just eco-friendly
            materials and energy efficiency. It's about creating spaces that
            harmonize with their environment and enhance the well-being of their
            inhabitants. This article examines the principles of sustainable
            architecture, discussing how architects are using innovative design
            strategies to build structures that are both beautiful and
            beneficial to our planet.
          </p>
        </article>
      </section>

      <aside className={styles.sidebar}>
        <section className={styles.sidebarSection}>
          <h2 className={styles.sidebarTitle}>Categories</h2>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarItem}>Category 1</li>
            <li className={styles.sidebarItem}>Category 2</li>
            <li className={styles.sidebarItem}>Category 3</li>
          </ul>
        </section>

        <section className={styles.sidebarSection}>
          <h2 className={styles.sidebarTitle}>Tags</h2>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarItem}>Tag 1</li>
            <li className={styles.sidebarItem}>Tag 2</li>
            <li className={styles.sidebarItem}>Tag 3</li>
          </ul>
        </section>
      </aside>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          &copy; 2023 React Styling Assignment
        </p>
      </footer>
    </div>
  );
}
