import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

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
                Babylon Studio is a lightweight, web-based platform designed to demystify advanced 3D development concepts for learners. Our project addresses the challenges faced by students and educators, where traditional game engines and 3D tools overwhelm users with technical jargon and complex interfaces.
              </p>
              <p>
                Leveraging Babylon.js, Babylon Studio provides an intuitive, block-based control system that enables users to import and manipulate objects with ease. Through interactive blocks, users can adjust material parameters, modify scene conditions, and experiment with GPU shader effects in real time.
              </p>
              <p>
                Additionally, our platform integrates the ReShade API to offer an accessible exploration of post-processing techniques and retro aesthetic effects. An integrated AI assistant guides users in applying these effects, bridging the gap between theoretical learning and practical application. By simplifying the exploration of GPU shaders and modern rendering techniques, Babylon Studio aims to enhance understanding and spark innovation in 3D modeling and game development education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
