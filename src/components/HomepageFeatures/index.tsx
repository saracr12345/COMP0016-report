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
            {/* Centered text with limited width */}
            <div className={styles.textContainer}>
              <Heading as="h2" className="text--center">Abstract</Heading>
              <p>
                MotionInput is an accessibility software designed to empower individuals with limited mobility or physical disabilities by providing an intuitive and touchless means of interacting with their computer and playing games. Our project focuses on three critical aspects of MotionInput: error correction, efficiency, and integration.
              </p>
              <p>
                Through cooperation with teachers and occupational therapists at various schools, we were able to conduct extensive user testing of MotionInput with students and children with special needs. Additionally, we performed testing with teachers and educators to gather their feedback and insights. This collaboration allowed us to ensure that the software meets the unique requirements of our target users and is suitable for use in educational settings. By identifying and addressing the most common failure modes, we have worked to improve the accessibility and usability of MotionInput.
              </p>
              <p>
                Secondly, we have improved the efficiency of MotionInput by running a performance profile and implementing a real-time mode for performance-sensitive features. These improvements enable teachers with older hardware to use advanced MotionInput modes like virtual pen inking, thereby increasing their ability to deliver interactive lessons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
