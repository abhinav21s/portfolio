function Hero() {
  const handleViewProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = '/assets/cv.pdf'; // Path to CV file in public folder
    link.download = 'Abhinav_Sharma_CV.pdf'; // Suggested filename for download
    link.click();
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Optional Avatar */}
        <div className="mb-8">
          <img 
            src="/assets/avatar.jpg" 
            alt="Abhinav Sharma"
            className="w-32 h-32 mx-auto rounded-full border-2 border-accent object-cover"
          />
        </div>

        {/* Name - Large and Bold */}
        <h1 className="text-5xl sm:text-6xl md:text-[64px] lg:text-[72px] font-black font-satoshi text-primary-text mb-4 leading-tight">
          Abhinav Sharma
        </h1>

        {/* Professional Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-secondary-text mb-6">
          Full-Stack Developer with Web3 Focus
        </h2>

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-secondary-text max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate Full-Stack Developer building clean, secure, and scalable web applications.
          Currently focusing on Web3 technologies to create intuitive decentralized experiences with React, Node.js, and Ethereum.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={handleViewProjects}
            className="w-full sm:w-auto px-8 py-4 bg-accent text-primary-bg font-semibold rounded-lg hover:bg-accent-hover transition-colors duration-150 min-w-[200px]"
          >
            View My Projects
          </button>
          <button
            onClick={handleDownloadCV}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-primary-bg transition-all duration-150 min-w-[200px]"
          >
            Download CV
          </button>
        </div>
      </div>

      {/* Smooth Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-secondary-text text-sm">Scroll Down</span>
          <svg
            className="w-6 h-6 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
