import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SEO from '../SEO'
import Section from './Section'
import TextBlock from './TextBlock'
import CardBlock from './CardBlock'
import HighlightBox from './HighlightBox'
import MetricCard from './MetricCard'
import ImageGrid from './ImageGrid'
import ComparisonTable from './ComparisonTable'
import DiagramContainer from './DiagramContainer'
import DeviceMockups from './DeviceMockups'
import { caseStudies } from '../../data/caseStudies'
import './CaseStudy.css'

function CaseStudyPage() {
  const { id } = useParams()
  const study = caseStudies.find(s => s.id === id)

  if (!study) {
    return (
      <div className="case-study-page">
        <SEO title="Case Study Not Found" description="The requested case study could not be found." />
        <div className="container">
          <h1>Case Study Not Found</h1>
          <Link to="/case-studies">← Back to Case Studies</Link>
        </div>
      </div>
    )
  }

  // Sample data structure for the case study content
  const caseStudyData = {
    hero: {
      title: study.title,
      metadata: [
        { label: 'ROLE', value: study.role },
        { label: 'PROJECT', value: study.title },
        { label: 'TIMELINE', value: study.timeline },
        { label: 'PLATFORM', value: study.platform }
      ],
      devices: {
        mobile: study.mobileScreens?.[0]?.image,
        laptop: '/RoyalTimes/Dashboard.png',
        tablet: '/Nannies/MacBook Pro 16_ - 19.png'
      }
    },
    sections: [
      {
        id: 'about',
        title: 'About the Project',
        content: {
          type: 'text',
          data: study.overview
        }
      },
      {
        id: 'problem',
        tag: 'DISCOVERY',
        tagColor: 'yellow',
        title: 'The Problem',
        content: {
          type: 'card',
          title: 'Understanding the Challenge',
          data: study.problem
        }
      },
      {
        id: 'process',
        title: 'The Design Process',
        content: {
          type: 'diagram',
          data: {
            src: 'https://placehold.co/800x300/f8fafc/475569?text=Design+Process+Diagram',
            caption: 'Our design process followed the Double Diamond methodology'
          }
        }
      },
      {
        id: 'discovery',
        tag: 'DISCOVERY',
        tagColor: 'yellow',
        title: 'Research & Discovery',
        content: {
          type: 'mixed',
          data: [
            {
              type: 'highlight',
              color: 'yellow',
              content: 'Through user research and competitive analysis, we identified key pain points in the current market solutions.'
            },
            {
              type: 'table',
              title: 'Competitive Analysis',
              headers: ['Platform', 'Strengths', 'Weaknesses', 'Opportunity'],
              rows: [
                ['Competitor A', 'Large user base', 'Poor UX', 'Better design'],
                ['Competitor B', 'Good features', 'High pricing', 'Affordable alternative'],
                ['Competitor C', 'Fast loading', 'Limited functionality', 'More features']
              ]
            }
          ]
        }
      },
      {
        id: 'define',
        tag: 'DEFINE',
        tagColor: 'green',
        title: 'Defining the Solution',
        content: {
          type: 'mixed',
          data: [
            {
              type: 'highlight',
              color: 'green',
              content: study.solution
            },
            {
              type: 'text',
              content: 'Based on our research findings, we developed a comprehensive solution that addresses the core user needs while maintaining business objectives.'
            }
          ]
        }
      },
      {
        id: 'ideate',
        tag: 'IDEATE',
        tagColor: 'blue',
        title: 'Ideation & Concepts',
        content: {
          type: 'card',
          title: 'Translating Insights into Solutions',
          data: 'We conducted multiple ideation sessions to explore different approaches to solving the identified problems. Key concepts included streamlined user flows, intuitive navigation patterns, and enhanced visual hierarchy.'
        }
      },
      {
        id: 'design',
        tag: 'DESIGN',
        tagColor: 'purple',
        title: 'High-Fidelity Designs',
        content: {
          type: 'images',
          columns: 3,
          data: [
            {
              src: 'https://placehold.co/400x300/f8fafc/1e293b?text=Dashboard+Design',
              alt: 'Dashboard Design',
              caption: 'Main Dashboard View'
            },
            {
              src: 'https://placehold.co/400x300/f8fafc/1e293b?text=Profile+Design',
              alt: 'Profile Design',
              caption: 'User Profile Interface'
            },
            {
              src: 'https://placehold.co/400x300/f8fafc/1e293b?text=Mobile+Design',
              alt: 'Mobile Design',
              caption: 'Mobile Application'
            }
          ]
        }
      },
      {
        id: 'implement',
        tag: 'IMPLEMENT',
        tagColor: 'orange',
        title: 'Implementation & Handoff',
        content: {
          type: 'text',
          data: 'The final designs were prepared for development with detailed specifications, interactive prototypes, and a comprehensive design system to ensure consistent implementation.'
        }
      },
      {
        id: 'results',
        tag: 'RESULTS',
        tagColor: 'green',
        title: 'Success Metrics',
        content: {
          type: 'metrics',
          data: [
            {
              metric: '200+',
              label: 'User registrations in the first month after launch',
              color: 'green'
            },
            {
              metric: '300+',
              label: 'Applications submitted through the platform',
              color: 'blue'
            },
            {
              metric: '90%',
              label: 'User satisfaction rate from post-launch surveys',
              color: 'purple'
            }
          ]
        }
      }
    ]
  }

  const renderContent = (content) => {
    switch (content.type) {
      case 'text':
        return (
          <TextBlock>
            <p>{content.data}</p>
          </TextBlock>
        )
      
      case 'card':
        return (
          <CardBlock title={content.title}>
            <p>{content.data}</p>
          </CardBlock>
        )
      
      case 'highlight':
        return (
          <HighlightBox color={content.color}>
            <p>{content.data}</p>
          </HighlightBox>
        )
      
      case 'images':
        return (
          <ImageGrid 
            images={content.data} 
            columns={content.columns || 3}
          />
        )
      
      case 'table':
        return (
          <ComparisonTable 
            headers={content.headers}
            rows={content.rows}
          />
        )
      
      case 'diagram':
        return (
          <DiagramContainer caption={content.data.caption}>
            <img src={content.data.src} alt="Process diagram" />
          </DiagramContainer>
        )
      
      case 'metrics':
        return (
          <div className="metrics-grid">
            {content.data.map((metric, index) => (
              <MetricCard 
                key={index}
                metric={metric.metric}
                label={metric.label}
                color={metric.color}
              />
            ))}
          </div>
        )
      
      case 'mixed':
        return (
          <div className="mixed-content">
            {content.data.map((item, index) => (
              <div key={index}>
                {renderContent(item)}
              </div>
            ))}
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="case-study-page">
      <SEO 
        title={study.title}
        description={study.overview}
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <Link to="/case-studies" className="back-link">
            ← Back to Case Studies
          </Link>
          
          <DeviceMockups 
            mobileImage={caseStudyData.hero.devices.mobile}
            laptopImage={caseStudyData.hero.devices.laptop}
            tabletImage={caseStudyData.hero.devices.tablet}
          />
          
          <h1 className="hero-title">
            {caseStudyData.hero.title}
          </h1>
          
          <div className="hero-metadata">
            {caseStudyData.hero.metadata.map((item, index) => (
              <div key={index}>
                <div className="metadata-item">
                  <span className="metadata-label">{item.label}</span>
                  <span className="metadata-value">{item.value}</span>
                </div>
                {index < caseStudyData.hero.metadata.length - 1 && (
                  <div className="metadata-divider"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {caseStudyData.sections.map((section, index) => (
        <Section
          key={section.id}
          tag={section.tag}
          tagColor={section.tagColor}
          title={section.title}
          className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
        >
          {renderContent(section.content)}
        </Section>
      ))}

      {/* Conclusion CTA */}
      <section className="conclusion-section">
        <div className="container">
          <div className="content-wrapper">
            <div className="cta-section">
              <h2 className="cta-heading">Ready to Work Together?</h2>
              <p className="cta-description">
                Interested in collaborating on your next project? Let's discuss how we can create something amazing together.
              </p>
              
              <div className="cta-buttons">
                <Link to="/case-studies" className="btn btn-secondary">
                  View More Case Studies
                </Link>
                <Link to="/contact" className="btn btn-primary">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudyPage