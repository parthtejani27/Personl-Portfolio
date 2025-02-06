import Head from "next/head";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

const Home = () => {
  return (
    <>
      <Head>
        <title>Parth Tejani - Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Parth Tejani - Full Stack Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <Hero />
        </section>

        <section id="about" className="py-20 bg-background-secondary">
          <div className="container mx-auto px-4">
            <About />
          </div>
        </section>

        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <Skills />
          </div>
        </section>

        <section id="projects" className="py-20 bg-background-secondary">
          <div className="container mx-auto px-4">
            <Projects />
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <Contact />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
