/**
 * Projects Component
 * 
 * Container for project cards grid with:
 * - "Featured Projects" or "My Work" heading
 * - 4-6 ProjectCard components in responsive grid
 * - "View More" or "See All on GitHub" link
 * - Scroll-triggered animations
 * 
 * Requirements: 5.1, 5.2, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7
 */

import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import useScrollAnimation from '../hooks/useScrollAnimation.js';

function Projects() {
  const [ref, isVisible] = useScrollAnimation();

  const handleViewMore = () => {
    window.open('https://github.com/abhinav21s', '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="projects" 
      ref={ref}
      className={`py-20 px-6 bg-primary-bg transition-all duration-[600ms] ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-primary-text mb-12 text-center">
          My Work
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              features={project.features}
              role={project.role}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center">
          <button
            onClick={handleViewMore}
            className="text-accent font-medium text-lg transition-colors duration-150 hover:text-accent-hover hover:underline"
          >
            See All on GitHub →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
