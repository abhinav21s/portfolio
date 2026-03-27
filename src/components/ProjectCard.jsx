/**
 * ProjectCard Component
 * 
 * Displays individual project information with:
 * - Bold project title
 * - 2-4 line description
 * - Tech stack as rounded pill tags
 * - 3-5 key features as bulleted list
 * - Role information
 * - "View Code" button (GitHub link)
 * - Conditional "Live Demo" button (if liveUrl provided)
 * - Subtle dark background with soft borders
 * 
 * Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8, 9.9
 */

function ProjectCard({ title, description, techStack, features, role, githubUrl, liveUrl }) {
  return (
    <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 transition-[transform,box-shadow] duration-150 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,191,255,0.3)]">
      {/* Project Title */}
      <h3 className="text-2xl font-bold text-primary-text mb-3">
        {title}
      </h3>

      {/* Project Description */}
      <p className="text-secondary-text mb-4 leading-relaxed">
        {description}
      </p>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs rounded-full bg-gray-800 text-primary-text border border-gray-700 transition-colors duration-150 hover:border-accent hover:text-accent"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Key Features List */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-primary-text mb-2">Key Features:</h4>
        <ul className="list-disc list-inside space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-secondary-text">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Role */}
      <p className="text-sm text-secondary-text mb-4 italic">
        Role: {role}
      </p>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-accent text-primary-bg font-medium rounded transition-colors duration-150 hover:bg-accent-hover"
        >
          View Code
        </a>
        
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-accent text-accent font-medium rounded transition-colors duration-150 hover:bg-accent hover:text-primary-bg"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
