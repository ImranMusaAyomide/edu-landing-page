import './Statistics.css';

export default function Statistics() {
  const stats = [
    {
      id: 1,
      number: '50K+',
      label: 'Active Students',
      description: 'Learners from around the world'
    },
    {
      id: 2,
      number: '500+',
      label: 'Quality Courses',
      description: 'In various fields and expertise levels'
    },
    {
      id: 3,
      number: '95%',
      label: 'Satisfaction Rate',
      description: 'Student satisfaction and completion'
    },
    {
      id: 4,
      number: '12K+',
      label: 'Certified Graduates',
      description: 'Successfully completed programs'
    }
  ];

  return (
    <section className="statistics">
      <div className="statistics-container">
        <div className="stats-header">
          <h2>Our Impact</h2>
          <p>Join thousands of students achieving their learning goals</p>
        </div>

        <div className="stats-grid">
          {stats.map(stat => (
            <div key={stat.id} className="stat-box">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
