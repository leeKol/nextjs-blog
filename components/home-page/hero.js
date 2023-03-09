import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/lee.png"
          alt="An image showing Lee"
          width={300}
          height={300}
          priority
        />
      </div>
      <h1>Hi, I&apos;m Lee</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React and NextJS.
      </p>
    </section>
  );
}

export default Hero;
