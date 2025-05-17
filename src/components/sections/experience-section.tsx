import React from 'react';

const ExperienceSection: React.FC = () => {
  const experienceEntries = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      years: '2020 - Present',
      description: 'Developing and maintaining web applications.',
      logo: 'https://placehold.co/600x400.png', // Placeholder
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Innovate Systems',
      years: '2017 - 2020',
      description: 'Built and deployed various software features.',
      logo: 'https://placehold.co/600x400.png', // Placeholder
    },
    {
      id: 3,
      title: 'Junior Developer',
      company: 'Creative Digital',
      years: '2015 - 2017',
      description: 'Assisted in frontend development tasks.',
      logo: 'https://placehold.co/600x400.png', // Placeholder
    }
  ];

  return (
    <section id="experience" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="timeline">
          {experienceEntries.map(entry => (
            <div key={entry.id} className="timeline-item mb-8 last:mb-0 flex items-start">
              {/* Company Logo */}
              <div className="flex-shrink-0 mr-4">
                <img src={entry.logo} alt={`${entry.company} logo`} className="w-12 h-12 rounded-full object-cover" />
              </div>
              {/* Experience Details */}
              <div className="timeline-content p-6 border rounded-lg shadow-sm flex-grow">
                <h3 className="text-xl font-semibold mb-1">{entry.title}</h3>
                <p className="text-gray-600 mb-1">{entry.company}</p>
                <p className="text-gray-500 text-sm mb-2">{entry.years}</p>
                <p className="mt-2 text-gray-700">{entry.description}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;