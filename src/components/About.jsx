import useScrollAnimation from '../hooks/useScrollAnimation';

function About() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-600 ${isVisible ? 'animate-fade-in animate-slide-up opacity-100' : 'opacity-0'
          }`}
      >
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-satoshi text-primary-text mb-12 text-center">
          About Me
        </h2>

        {/* Biographical Content */}
        <div className="space-y-6 text-primary-text text-center">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            I'm a passionate Full-Stack Developer with a strong focus on Web3 technologies.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            I enjoy building secure, scalable, and user-friendly web applications. My projects include non-custodial Ethereum wallets, decentralized voting systems, and AI-powered travel planners — combining modern frontend and backend technologies with blockchain concepts.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
           What drives me is creating intuitive digital experiences that solve real-world problems. I love working with React, Node.js, and exploring Ethereum tools to build seamless decentralized applications.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            When I'm not coding, I spend time learning new technologies, experimenting with Web3 ideas, and contributing to open-source projects. I'm always excited to take on challenging work and grow as a developer.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            I'm currently open to new opportunities where I can contribute my skills, learn from talented teams,
            and continue growing as a developer. Let's build something amazing together.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
