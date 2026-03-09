import './Feature.css';

export default function Feature() {
  const features = [
    {
      id: 1,
      title: 'Interactive Learning',
      description: 'Engage with interactive lessons and real-time feedback to enhance your learning experience.',
      icon: '🎓'
    },
    {
      id: 2,
      title: 'Expert Instructors',
      description: 'Learn from industry experts and experienced educators dedicated to your success.',
      icon: '👨‍🏫'
    },
    {
      id: 3,
      title: 'Flexible Schedule',
      description: 'Study at your own pace with courses available 24/7 on any device.',
      icon: '⏰'
    },
    {
      id: 4,
      title: 'Certification',
      description: 'Earn recognized certificates upon completion to boost your career prospects.',
      icon: '🏆'
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <h2>Why Choose Us</h2>
        <p className="features-subtitle">Discover what makes our platform unique</p>
        
        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
