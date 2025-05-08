import React from 'react';
import { Link } from 'react-router-dom';
import './blog.css';
import Footer from '../components/Footer';
import xssImg from '../assets/images/Xss.jpg';
import rootkitImg from '../assets/images/Rootkit.jpg';
import vaptCloud2Img from '../assets/images/vapt-cloud-2.jpg';
import vaptCloud1Img from '../assets/images/vapt-cloud-1.webp';

const blogs = [
  {
    id: 'xss',
    title: 'XSS',
    date: 'September 19, 2024',
    description: 'Cross-site scripting, or XSS, is an injection attack that has long been considered a top problem in the cybersecurity world...',
    image: xssImg,
    type: 'article',
    link: '/xss'
  },
  {
    id: 'rootkit',
    title: 'Rootkit',
    date: 'August 19, 2024',
    author: 'Srilakshmi',
    description: 'Understanding the nature of rootkits, their many kinds, and preventative strategies is critical for protecting systems from this hidden threat...',
    image: rootkitImg,
    type: 'article',
    link: '/rootkit'
  },
  {
    id: 'vapt-cloud-2',
    title: 'VAPT for Cloud – Part 2',
    date: 'August 8, 2024',
    author: 'Bhaskar',
    description: 'VAPT Methodologies for Cloud-Native Applications and Microservices...',
    image: vaptCloud2Img,
    type: 'video',
    link: '/vapt-cloud'
  },
  {
    id: 'vapt-cloud-1',
    title: 'VAPT for Cloud – Part 1',
    date: 'August 5, 2024',
    author: 'Bhaskar',
    description: 'VAPT is essentials for identifying risks in Cloud-Native environments...',
    image: vaptCloud1Img,
    type: 'video',
    link: '/vapt-cloud-part1'
  },
  {
    id: 'threat-modeling-1',
    title: 'Threat Modeling',
    date: 'July 31, 2024',
    author: 'Suresh',
    description: 'Threat Modeling helps detect vulnerabilities early...',
    image: require('../assets/images/threat-modeling-1.jpg'),
    type: 'video',
    link: '/threat-modeling'
  },
  {
    id: 'vapt-cloud-2',
    title: 'VAPT for Cloud – Part 2',
    date: 'July 25, 2024',
    author: 'Bhaskar',
    description: 'Vulnerability assessments systematically identify and prioritize security weaknesses within an application or infrastructure...',
    image: require('../assets/images/vapt-cloud-3.jpg'),
    type: 'article',
    link: '/vapt-cloud-article'
  },
  {
    id: 'vapt-cloud-1',
    title: 'VAPT for Cloud – Part 1',
    date: 'July 18, 2024',
    author: 'Bhaskar',
    description: 'In the evolving landscape of cloud computing, cloud-native applications and microservices architectures offer unparalleled scalability and flexibility but introduce complex security challenges...',
    image: require('../assets/images/vapt-cloud-4.jpg'),
    type: 'article',
    link: '/vapt-cloud-part1-article'
  },
  {
    id: 'threat-modeling-2',
    title: 'Threat Modeling',
    date: 'July 9, 2024',
    author: 'Suresh',
    description: 'Threat modeling is a structured process involving stakeholders to identify and mitigate potential security threats early in the development lifecycle...',
    image: require('../assets/images/threat-modeling-2.jpg'),
    type: 'article',
    link: '/threat-modeling-blog'
  },
  {
    id: 'cyber-insurance-ransomware',
    title: 'Impact of cyber insurance coverage on ransomware outcomes',
    date: 'July 4, 2024',
    author: 'Sridhar',
    description: 'The goal of insurance is to reduce the impact of perils on an organization...',
    image: require('../assets/images/cyber-insurance.jpg'),
    type: 'article',
    link: '/cyber-insurance-blog'
  },
  {
    id: 'evolution-vapt',
    title: 'The Evolution of Vulnerability Assessment and Penetration Testing (VAPT)',
    date: 'July 1, 2024',
    author: 'Priyanka',
    description: 'The evolution of VAPT from its early origins to its current role as a cornerstone of modern cybersecurity reflects the ongoing efforts to adapt and innovate in response to evolving cyber threats...',
    image: require('../assets/images/evolution-vapt.webp'),
    type: 'article',
    link: '/vapt-evolution-blog'
  },
];

const Blog = () => {
  // Colors for date highlighting
  const dateColors = [
    '#ff9800', // orange
    '#2196f3', // blue
    '#4caf50', // green
    '#e91e63', // pink
    '#9c27b0', // purple
    '#009688', // teal
    '#f44336', // red
    '#3f51b5', // indigo
    '#00bcd4', // cyan
    '#8bc34a', // light green
  ];

  // Group blogs for custom row layout: 4, 3, 3
  const row1 = blogs.slice(0, 4);
  const row2 = blogs.slice(4, 7);
  const row3 = blogs.slice(7, 10);

  const bgColors = [
    'rgba(255, 152, 0, 0.08)',   // orange
    'rgba(33, 150, 243, 0.08)',  // blue
    'rgba(76, 175, 80, 0.08)',   // green
    'rgba(233, 30, 99, 0.08)',   // pink
    'rgba(156, 39, 176, 0.08)',  // purple
    'rgba(0, 150, 136, 0.08)',   // teal
    'rgba(244, 67, 54, 0.08)',   // red
    'rgba(63, 81, 181, 0.08)',   // indigo
    'rgba(0, 188, 212, 0.08)',   // cyan
    'rgba(139, 195, 74, 0.08)',  // light green
  ];

  const renderRow = (row, offset) => (
    <div className="blog-list-row">
      {row.map((blog, idx) => (
        <div
          key={blog.id}
          className="blog-card"
          style={{
            background: bgColors[offset + idx],
            borderBottom: `6px solid ${dateColors[offset + idx]}`
          }}
        >
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <div className="blog-content">
            <h3>{blog.title}</h3>
            <p className="blog-date" style={{ color: dateColors[offset + idx], fontWeight: 'bold', fontSize: '1.05rem' }}>{blog.date}</p>
            <p className="blog-description">{blog.description}</p>
            <Link 
              to={blog.link} 
              className={`blog-link ${blog.type === 'video' ? 'video-link' : ''}`}
            >
              {blog.type === 'video' ? 'View Video' : 'Read More'}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="blog-container">
        <h2 className="blog-title">Our Latest Blogs</h2>
        {renderRow(row1, 0)}
        {renderRow(row2, 4)}
        {renderRow(row3, 7)}
      </div>
      <Footer />
    </>
  );
};

export default Blog; 