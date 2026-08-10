import React, { useState } from 'react';
import {
  Sparkles,
  Search,
  MapPin,
  MessageSquare,
  User,
  Plus,
  Compass,
  Home,
  Flame,
  ArrowRight,
  ShieldCheck,
  Lock,
  Flag,
  Star,
  Landmark,
  FlaskConical,
  Orbit,
  TrendingUp,
  Plane,
  Music,
  Palette,
  Scale,
  Activity,
  Laptop,
  Brain,
  Leaf,
  Camera,
  Utensils,
  Stethoscope,
  BookOpen,
  SlidersHorizontal,
  ChevronRight,
  ChevronDown,
  X,
  Clock
} from 'lucide-react';

export default function App() {
  const [showAllMembers, setShowAllMembers] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTopic, setSearchTopic] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Sample Member Data (8 Profiles)
  const initialMembers = [
    {
      id: 1,
      name: 'Camille',
      age: 26,
      city: 'Bordeaux',
      topic: 'Psychology',
      topicIcon: Brain,
      rate: '20 €/h',
      rating: '4,9',
      reviews: '24',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      bio: 'Passionate about clinical psychology, cognitive behavior, and human relationships.',
      tags: ['Reading', 'Yoga']
    },
    {
      id: 2,
      name: 'Alexis',
      age: 28,
      city: 'Lyon',
      topic: 'History',
      topicIcon: Landmark,
      rate: '18 €/h',
      rating: '4,8',
      reviews: '18',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'Enthusiast of ancient civilizations, geopolitics, and world history.',
      tags: ['History', 'Geopolitics']
    },
    {
      id: 3,
      name: 'Inès',
      age: 24,
      city: 'Toulouse',
      topic: 'Art & Design',
      topicIcon: Palette,
      rate: '20 €/h',
      rating: '4,9',
      reviews: '32',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      bio: 'Painter and UI designer. I love exchanging about creative processes & design.',
      tags: ['Painting', 'Design']
    },
    {
      id: 4,
      name: 'Hugo',
      age: 30,
      city: 'Nantes',
      topic: 'Marketing',
      topicIcon: TrendingUp,
      rate: '25 €/h',
      rating: '4,7',
      reviews: '15',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      bio: 'Philosophy enthusiast and digital strategist exploring modern communication.',
      tags: ['Photo', 'Business']
    },
    {
      id: 5,
      name: 'Mathieu',
      age: 32,
      city: 'Paris',
      topic: 'Archaeology',
      topicIcon: Landmark,
      rate: '35 €/h',
      rating: '4,9',
      reviews: '41',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
      bio: 'Amateur archaeologist exploring ancient ruins, space sciences, and history.',
      tags: ['Science', 'Travel']
    },
    {
      id: 6,
      name: 'Sofia',
      age: 27,
      city: 'Marseille',
      topic: 'Literature',
      topicIcon: BookOpen,
      rate: '22 €/h',
      rating: '4,8',
      reviews: '29',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      bio: 'Poetry lover and literature teacher. Enjoy deep literary debates over coffee.',
      tags: ['Books', 'Poetry']
    },
    {
      id: 7,
      name: 'Yanis',
      age: 29,
      city: 'Lille',
      topic: 'IT & Tech',
      topicIcon: Laptop,
      rate: '30 €/h',
      rating: '5,0',
      reviews: '12',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      bio: 'Software engineer passionate about AI, open-source tech, and digital privacy.',
      tags: ['Coding', 'AI']
    },
    {
      id: 8,
      name: 'Élise',
      age: 28,
      city: 'Nice',
      topic: 'Philosophy',
      topicIcon: Brain,
      rate: '24 €/h',
      rating: '4,9',
      reviews: '37',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
      bio: 'Ethics researcher exploring logic, consciousness, and social dynamics.',
      tags: ['Ethics', 'Logic']
    }
  ];

  // Lead Directive: By default show 4 profiles, expanded shows all
  const displayedMembers = showAllMembers ? initialMembers : initialMembers.slice(0, 4);

  // Category Pills Data for Horizontal Scroll
  const categories = [
    { name: 'History', icon: Landmark },
    { name: 'Science', icon: FlaskConical },
    { name: 'Astronomy', icon: Orbit },
    { name: 'Economy', icon: TrendingUp },
    { name: 'Travel', icon: Plane },
    { name: 'Music', icon: Music },
    { name: 'Art & Design', icon: Palette },
    { name: 'Psychology', icon: Brain },
    { name: 'Environment', icon: Leaf },
    { name: 'Cooking', icon: Utensils },
    { name: 'Medicine', icon: Stethoscope },
    { name: 'Literature', icon: BookOpen }
  ];

  return (
    <div className="device-container">
      {/* Mobile Sticky Header */}
      <header className="mobile-header">
        <a href="#" className="brand-logo">
          <Sparkles className="brand-icon" />
          <div className="brand-text">
            un vrai
            <span>réseau social</span>
          </div>
        </a>

        <div className="header-actions">
          <button className="header-icon-btn" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="header-icon-btn" aria-label="Messages">
            <MessageSquare size={20} />
            <span className="notification-badge">3</span>
          </button>
          <button className="header-icon-btn" aria-label="Menu">
            <User size={20} />
          </button>
        </div>
      </header>

      {/* Hero Section (No Image in First Div per Lead Directive) */}
      <section className="hero-section">
        <h1 className="hero-heading">
          Real discussions.
          <br />
          Real meetups.
          <span className="highlight">In person.</span>
        </h1>
        <p className="hero-subtitle">
          Exchange, learn, share your passions and meet inspiring people who matter in real life.
        </p>
        <button className="btn-primary">
          Register for free <ArrowRight size={16} />
        </button>
      </section>

      {/* Search Bar Section (Default search bar with outside filter icon per Manager Order) */}
      <section className="search-container">
        {!isFilterOpen ? (
          <div className="default-search-row">
            <div
              className="search-input-wrapper"
              onClick={() => setIsFilterOpen(true)}
            >
              <Search className="search-input-icon" size={16} />
              <input
                type="text"
                className="main-search-input"
                placeholder={searchTopic ? searchTopic : "What would you like to discuss?"}
                readOnly
              />
            </div>
            <button
              className="btn-filter-outside"
              onClick={() => setIsFilterOpen(true)}
              aria-label="Open advance filter"
              title="Advance filter"
            >
              <SlidersHorizontal size={17} />
            </button>
          </div>
        ) : (
          <div className="expanded-search-box">
            <div className="filter-header">
              <span className="filter-title">Advanced search filters</span>
              <button
                className="btn-close-filter"
                onClick={() => setIsFilterOpen(false)}
              >
                Close <X size={14} />
              </button>
            </div>

            <div className="input-wrapper">
              <Search className="input-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="What would you like to discuss?"
                value={searchTopic}
                onChange={(e) => setSearchTopic(e.target.value)}
                autoFocus
              />
            </div>

            <div className="input-wrapper">
              <MapPin className="input-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="City or neighborhood"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
              />
            </div>

            <button
              className="btn-search"
              onClick={() => setIsFilterOpen(false)}
            >
              <Search size={18} /> Search
            </button>
          </div>
        )}
      </section>

      {/* Horizontal Scrollable Categories Pills (Lead Directive) */}
      <div className="categories-wrapper">
        <div className="categories-scroll">
          <button
            className={`category-pill ${activeCategory === 'All' ? 'active' : ''}`}
            onClick={() => setActiveCategory('All')}
          >
            All Categories
          </button>
          {categories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <button
                key={idx}
                className={`category-pill ${activeCategory === cat.name ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.name)}
              >
                <IconComp className="category-pill-icon" />
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* New Members Section (2 Profiles Per Row on Mobile per Lead Directive) */}
      <section>
        <div className="section-header">
          <h2 className="section-title">
            <Sparkles className="title-icon" /> New members
          </h2>
          <button
            className="see-all-btn"
            onClick={() => setShowAllMembers(!showAllMembers)}
          >
            {showAllMembers ? 'Show less' : 'View all'}
          </button>
        </div>

        {/* 2-Column Grid on Mobile */}
        <div className="members-grid">
          {displayedMembers.map((member) => {
            const TopicIcon = member.topicIcon;
            return (
              <div key={member.id} className="member-card">
                {/* Header with Circular Avatar & Info */}
                <div className="card-top-header">
                  <div className="avatar-wrapper">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="avatar-img"
                    />
                  </div>

                  <div className="member-info-col">
                    <div className="member-name-age">
                      {member.name}, {member.age}
                    </div>

                    <div className="member-topic-badge">
                      <TopicIcon size={10} /> {member.topic}
                    </div>

                    <div className="member-location">
                      <MapPin size={10} /> {member.city}
                    </div>
                  </div>
                </div>

                {/* Rate & Rating Review Row (Matching Landing Page Mockup) */}
                <div className="card-rate-row">
                  <div className="rating-badge">
                    <Star className="star-icon" size={11} />
                    <span className="rating-score">{member.rating}</span>
                    <span className="rating-count">({member.reviews})</span>
                  </div>
                  <span className="rate-amount">{member.rate}</span>
                </div>

                {/* Tags Row */}
                <div className="member-tags">
                  {member.tags.map((tag, i) => (
                    <span key={i} className="mini-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Short Bio Snippet */}
                <p className="member-bio">{member.bio}</p>
              </div>
            );
          })}
        </div>

        {/* Lead Directive: View More Button */}
        <div className="view-more-container">
          <button
            className="btn-secondary-expand"
            onClick={() => setShowAllMembers(!showAllMembers)}
          >
            {showAllMembers ? (
              <>Show less <ChevronDown style={{ transform: 'rotate(180deg)' }} size={16} /></>
            ) : (
              <>View more profiles <ChevronDown size={16} /></>
            )}
          </button>
        </div>
      </section>

      {/* How It Works Section ("Comment ça marche ?") */}
      <section className="how-it-works-section">
        <h2 className="section-title">
          <RocketIcon className="title-icon" /> How it works?
        </h2>

        <div className="steps-list">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-info">
              <h4>1. Find</h4>
              <p>Search for a specific topic or person matching your interests.</p>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-info">
              <h4>2. Connect</h4>
              <p>Contact and discuss with the person via private messaging.</p>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-info">
              <h4>3. Meet Up</h4>
              <p>Agree on a time, public spot, and duration for your meeting.</p>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <div className="step-info">
              <h4>4. Share</h4>
              <p>Meet in real life, exchange ideas, and enjoy a genuine conversation!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Community Section */}
      <section className="trust-section">
        <h2 className="section-title">
          <ShieldCheck className="title-icon" /> Trusted Community
        </h2>

        <div className="trust-grid">
          <div className="trust-card">
            <div className="trust-icon-box">
              <ShieldCheck size={18} />
            </div>
            <h4>Respect others</h4>
            <p>Kindness and mutual respect are the bases of our community.</p>
          </div>

          <div className="trust-card">
            <div className="trust-icon-box">
              <Lock size={18} />
            </div>
            <h4>Protect privacy</h4>
            <p>Never share sensitive personal info publicly.</p>
          </div>

          <div className="trust-card">
            <div className="trust-icon-box">
              <Flag size={18} />
            </div>
            <h4>Report issues</h4>
            <p>In case of inappropriate behavior, report it immediately.</p>
          </div>

          <div className="trust-card">
            <div className="trust-icon-box">
              <Star size={18} />
            </div>
            <h4>Safe Meetups</h4>
            <p>Meet in public places like cafés and libraries.</p>
          </div>
        </div>
      </section>

      {/* Popular Topics Section */}
      <section>
        <div className="section-header">
          <h2 className="section-title">
            <Flame className="title-icon" /> Popular Topics
          </h2>
          <button className="see-all-btn">View all</button>
        </div>

        <div className="popular-topics-grid">
          {categories.slice(0, 8).map((cat, idx) => {
            const TopicIcon = cat.icon;
            return (
              <div key={idx} className="topic-chip">
                <TopicIcon size={16} style={{ color: '#D81B43' }} />
                <span>{cat.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer Registration CTA Banner */}
      <section className="footer-banner">
        <h3>Join thousands of people sharing your passions!</h3>
        <p>Start finding discussion partners in your city today.</p>
        <button className="btn-white">Register for free</button>
      </section>

      {/* Fixed Mobile Bottom Navigation Bar */}
      <nav className="bottom-nav">
        <button className="nav-item active">
          <Home className="nav-icon" />
          <span>Home</span>
        </button>

        <button className="nav-item">
          <MessageSquare className="nav-icon" />
          <span>Messages</span>
        </button>

        <button className="nav-action-btn" aria-label="Add">
          <Plus size={24} />
        </button>

        <button className="nav-item">
          <Compass className="nav-icon" />
          <span>Explore</span>
        </button>

        <button className="nav-item">
          <User className="nav-icon" />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
}

// Custom Rocket Icon for How It Works
function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.79-1.81.79-1.81" />
      <path d="M12 10l-2 2" />
      <path d="M14.5 9.5c1.1-1.1 1.7-2.6 1.7-4.1C16.2 3.5 14.5 2 12.5 2c-1.5 0-3 .6-4.1 1.7L3.5 8.6c-.7.7-1 1.6-1 2.5 0 1.2.6 2.3 1.6 3l1.8 1.2 5.1-5.1" />
      <path d="M15 15l2 2" />
      <path d="M18.5 14.5c1.1 1.1 2.6 1.7 4.1 1.7 1.9 0 3.4-1.7 3.4-3.7 0-1.5-.6-3-1.7-4.1L19.4 3.5c-.7-.7-1.6-1-2.5-1" />
    </svg>
  );
}
