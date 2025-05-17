import React from 'react';

const ExperienceSection: React.FC = () => {
  const experienceEntries = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      years: '2020 - Present',
      description: 'Developing and maintaining web applications.'
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Innovate Systems',
      years: '2017 - 2020',
      description: 'Built and deployed various software features.'
    },
    {
      id: 3,
      title: 'Junior Developer',
      company: 'Creative Digital',
      years: '2015 - 2017',
      description: 'Assisted in frontend development tasks.'
    }
  ];

  return (
    <section id="experience" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="timeline">
          {experienceEntries.map(entry => (
            <div key={entry.id} className="timeline-item mb-8 last:mb-0">
              <div className="timeline-content p-6 border rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold">{entry.title}</h3>
                <p className="text-gray-600">{entry.company}</p>
                <p className="text-gray-500 text-sm">{entry.years}</p>
                <p className="mt-2">{entry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;