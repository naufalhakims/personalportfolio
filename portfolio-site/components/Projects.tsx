'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFilter, setActiveFilter] = useState('All');

  // Customize these projects with your actual work
  // Replace image URLs with your own screenshots or use Unsplash for placeholders
  const projects = [
    {
      title: 'Film Recommendation Similarity System',
      description:
        'A web application that recommends accurate other similar films - A big data implementation.',
      image: '/FilmRecommendation.png',
      tech: ['Apache Pyspark', 'Minio', 'Streamlit', 'Apache Kafka', 'Docker', 'Python'],
      github: 'https://github.com/naufalhakims/bigdata-final-project',
      tags: ['Data'],
    },
    {
      title: 'BisaKita Donation Web App',
      description:
        'A donation platform that has a features such as register/login as admin/user, create donation campaigns, payment gateway, implementing MongoDB as the database.',
      image: '/fp-pemweb.png',
      tech: ['Vue.js', 'TypeScript', 'MongoDB', 'Git'],
      github: 'https://github.com/yourusername/project2',
      tags: ['Web Development'],
    },
    {
      title: 'EDA on Employee Dataset',
      description:
        'Analysis of employee data to uncover trends and insights such as correlation between some variables, etc using exploratory data analysis techniques.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
      tech: ['Jupyter Notebook', 'Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      github: 'https://www.kaggle.com/code/naufalhakim123/modul-1',
      tags: ['Data'],
    },
    {
      title: 'Classification & Regression on Predicting Estimated Delivery Time',
      description:
        'Supervised learning project to predict estimated delivery time using various classification and regression algorithms.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      tech: ['Jupyter Notebook', 'Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      github: 'https://www.kaggle.com/code/naufalhakim123/ai-modul-2',
      tags: ['AI/ML'],
    },
    {
      title: 'Unsupervised Learning on Economic Profile Countries Dataset',
      description:
        'Clustering analysis on countries based on their economic profiles to identify patterns and groupings using unsupervised learning techniques.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
      tech: ['Python', 'Pandas', 'Numpy', 'Sklearn', 'Matplotlib', 'Seaborn'],
      github: 'https://www.kaggle.com/code/naufalhakim123/prak-3',
      tags: ['Data'],
    },
    {
      title: 'Sign Language Model Predictor using CNN',
      description:
        'A convolutional neural network (CNN) model to accurately predict sign language gestures from images',
      image: 'https://images.unsplash.com/photo-1733370446176-cf060c668a28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tech: ['Python', 'Pandas', 'Numpy', 'Sklearn', 'Matplotlib', 'Seaborn'],
      github: 'https://www.kaggle.com/code/naufalhakim123/akseleratorgacor',
      tags: ['AI/ML'],
    },
    {
      title: 'Twitter Sentiment Analysis',
      description:
        'A sentiment analysis project that classifies tweets into positive, negative, or neutral sentiments using NLP techniques.',
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tech: ['Python', 'Pandas', 'Numpy', 'Sklearn', 'Matplotlib', 'Seaborn', 'NLTK', 'TensorFlow'],
      github: 'https://www.kaggle.com/code/naufalhakim123/modul-5',
      tags: ['AI/ML'],
    },
    {
      title: 'Emotion Prediction Classification from Text',
      description:
        'A machine learning model that predicts emotions from text data, classifying them into categories such as happy, sad, angry, etc.',
      image: 'https://images.unsplash.com/photo-1694109183960-18f5a3ed082c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZW1vaml8ZW58MHx8MHx8fDI%3D',
      tech: ['Python', 'Pandas', 'Numpy', 'Sklearn', 'Matplotlib', 'Seaborn', 'Pytorch'],
      github: 'https://www.kaggle.com/code/naufalhakim123/modul6-lastt',
      tags: ['AI/ML'],
    },
    {
      title: 'HMIT Tuas Prakarsa Media & Information',
      description:
        'A design content in the form of posters, banners, and social media posts for HMIT, you can view the design in @hmit_its Instagram',
      image: '/Cover.png',
      tech: ['Figma'],
      github: 'https://www.instagram.com/hmit_its/',
      tags: ['Design'],
    },
    {
      title: 'A Renewal Agent 6.0 Design & Documentation',
      description:
        'A design content in the form of posters, banners, and social media posts for A Renewal Agent 6.0, you can view the design in @ara_its Instagram',
      image: '/ara.png',
      tech: ['Figma'],
      github: 'https://www.instagram.com/ara_its/',
      tags: ['Design'],
    },
  ];

  const categories = ['All', 'Data', 'AI/ML', 'Web Development', 'Design'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Work</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my projects during my study.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === category
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={false}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-blue-400 text-xs rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors border border-gray-700"
                  >
                    Project Link
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
