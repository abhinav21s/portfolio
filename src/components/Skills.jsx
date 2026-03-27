import useScrollAnimation from '../hooks/useScrollAnimation';
import { skills } from '../data/skills';

function Skills() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section 
      id="skills" 
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto w-full transition-all duration-600 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-satoshi text-primary-text mb-12 text-center">
          Skills
        </h2>

        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {skills.map((category) => (
            <div key={category.category}>
              {/* Category Heading */}
              <h3 className="text-2xl sm:text-3xl font-bold text-accent mb-6">
                {category.category}
              </h3>

              {/* Skills Tags Grid - Responsive Layout */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary-bg text-primary-text rounded-lg border border-secondary-text/20 hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-150 cursor-default text-center"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
