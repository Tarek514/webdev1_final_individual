import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Privacypolicy from '../styles/utils.module.css';
import Signup from '../components/signupform';
import PrivacyPolicy from '../pages/privacy';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home() {
  return (
    <Layout home>
    <Head>
      <title>{siteTitle}</title>

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-CE5Z19Q9BH"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CE5Z19Q9BH');
            `
          }}
        />
    </Head>
   
    <section className={`${utilStyles.headingMd} ${utilStyles.softBackground}`}>
    <h2>Web Developer</h2>

    <p>Hey there! I'm Tarek, a passionate front-end developer and creative thinker. With a knack for turning design concepts into interactive web experiences, I thrive on the intersection of design and code. </p>
    
    <h2>About Me</h2>
      <p>I'm an enthusiastic and creative front-end developer, excited to contribute my skills to the world of web development. As a recent graduate with a strong foundation in HTML, CSS, and JavaScript, I'm passionate about crafting captivating user interfaces and bringing designs to life. When I'm not coding, you'll find me exploring the latest design trends, playing soccer, and dreaming up new digital innovations. My goal is to create seamless and user-centered web experiences that leave a lasting impact. Let's collaborate and make the web a more engaging place together!</p>

    <h2>Professional Experience</h2>
  <p>
    As a Customer Support Specialist at Hallmark Aviation, I've honed my customer service skills to deliver exceptional support to our clients. I've become adept at understanding and addressing customer needs, resolving issues, and providing clear and effective solutions. I've consistently maintained a high customer satisfaction rate by demonstrating empathy, patience, and a genuine commitment to helping users overcome challenges. Through active listening and effective communication, I've been able to turn customer concerns into positive experiences, fostering long-lasting relationships.
    </p>
    <div className={utilStyles.projectSection}>
  <h2>Projects</h2>
  <div className={utilStyles.projectCards}>
    <div className={`${utilStyles.projectCard} ${utilStyles.projectCardSameWidth}`}>
          <h3>Restaurent Website</h3>
      <p>This project marked a pivotal moment in my journey towards embracing web development as a career path. Constructed with a blend of HTML, CSS, JavaScript, and SQL, the website showcased my early exploration into these technologies. It boasted several interactive pages, including one where users could personally create their meals – an achievement that relied on SQL to preserve their culinary creations.</p>
    </div>
  </div>
  <div className={utilStyles.projectCards}>
    <div className={`${utilStyles.projectCard} ${utilStyles.projectCardSameWidth}`}>
      <h3>Museum Website</h3>
      <p>This was meticulously built using a combination of HTML and CSS, acting as a stepping stone towards my career in web development. This project beautifully exhibited my initial foray into these foundational technologies, reflecting my determination to learn and grow.</p>
    </div>
  </div>
  <div className={utilStyles.projectCards}>
    <div className={`${utilStyles.projectCard} ${utilStyles.projectCardSameWidth}`}>
      <h3>Personal Website</h3>
      <p>This project was built using bootstrap during an early stage of my web development career.  Its primary objective was to present a comprehensive portrait of my persona and professional prowess to potential recruiters. Fueled by the desire to encapsulate my essence and contributions, the website not only showcased my accomplishments but also provided an interactive platform for engagement. </p>
    </div>
  </div>
</div>

   <h2>SkillSet</h2>

  <div>
    <div>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Python</li>
      <li>SQL</li>
      <li>Java</li>
    </div>
    <div>
      <li>Git</li>
      <li>GitHub</li>
      <li>AutoCAD</li>
      <li>Node.js</li>
      <li>PHP</li>
      <li>Amazon Web Services</li>
    </div>
  </div>

    <Signup/>

      <a href="https://www.linkedin.com/in/tarek-hossain-95b573254/">LinkedIn</a> <br></br>
      <a href="https://github.com/Tarek514">GitHub</a>

      <br></br>
      <Link href="/privacy">
          Privacy Policy
      </Link>
      </section>
  </Layout>
  );
}