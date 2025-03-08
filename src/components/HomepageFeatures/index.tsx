import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const teamMembers = [
  {
    name: 'Aditya Mukhija',
    role: 'Programmer, Designer, Researcher',
    image: '/img/suhas.jpg', // Change to the actual path of the image
  },
  {
    name: 'Adwit Hans',
    role: 'Programmer, Researcher, Designer',
    image: '/img/mikoto.jpg', // Change to the actual path of the image
  },
  {
    name: 'Shaye Garg ',
    role: 'Researcher, Programmer, Designer, Team Leader',
    image: '/img/sahil.jpg', // Change to the actual path of the image
  },
  {
    name: 'Sara Craciun ',
    role: 'Report Writer, Programmer, Researcher',
    image: '/img/new-member.jpg', // Change to the actual path of the image
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            
            {/* Affiliates Image */}
            <div className="text--center">
              <img 
                src="/img/affiliates.jpeg" 
                alt="Affiliates Logos"
                className={styles.affiliatesImage} 
              />
            </div>

            {/* Abstract Text */}
            <div className={styles.textContainer}>
              <Heading as="h2" className="text--center">Abstract</Heading>
              <p>
                Babylon Studio is a lightweight, web-based platform designed to simplify advanced 3D development concepts for learners. Our project addresses the challenges faced by students especially beginners as traditional game engines and 3D tools overwhelm users with technical jargon and complex interfaces.
              </p>
              <p>
                Leveraging Babylon.js, Babylon Studio provides an intuitive, block-based control system that enables users to import and manipulate objects with ease. Through interactive blocks, users can adjust material parameters, modify scene conditions, and experiment with GPU shader effects in real time.
              </p>
              <p>
                Additionally, our platform integrates the ReShade API to offer an accessible exploration of post-processing techniques and retro aesthetic effects. An integrated AI assistant guides users in applying these effects, bridging the gap between theoretical learning and practical application. By simplifying the exploration of GPU shaders and modern rendering techniques, Babylon Studio aims to enhance understanding and spark innovation in 3D modeling and game development education.
              </p>
            </div>

            {/* Introduction and Project Demo */}
            <div className={styles.textContainer}>
              <Heading as="h2" className="text--center">Introduction and Project Demo</Heading>
              {/* Centered Video Placeholder */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", height: "100px" }}>
                <p>*** VIDEO ***</p>
              </div>
            </div>
            
            {/* Gantt chart */}
            <div className={styles.textContainer}>
              <Heading as="h2" className="text--center">Gantt Chart (Not Finalised) </Heading>
              <div className="text--center">
                <img 
                  src="/img/gantt-chart.png" 
                  alt="Gantt Chart"
                  className={styles.ganttImage} 
                />
              </div>
            </div>

            {/* Team Members */}
            <div className={styles.textContainer}>
              <Heading as="h2" className="text--center">Team Members</Heading>
              <div className="row">
                {teamMembers.map((member, index) => (
                  <div key={index} className="col col--3 text--center">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className={styles.teamMemberImage} 
                    />
                    <Heading as="h3">{member.name}</Heading>
                    <p>{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
