---
id: requirements
title: Requirements
slug: /requirements
hide_table_of_contents: false
sidebar_position: 0
sidebar: false
---


# Requirements

## Section 1 - Project Overview

### Section 1.1 - Project Introduction and Background
BabylonStudio is an interactive, web-based platform designed to simplify 3D development for students and beginner developers. It leverages Babylon.js for real-time rendering and integrates the ReShade API to enhance visual effects through accessible, block-based controls.

The platform is built to bridge the gap between theoretical learning and hands-on experimentation, offering an intuitive, no-code environment where users can manipulate materials, lighting, post-processing effects, and GPU shaders without needing extensive programming knowledge.

By focusing on usability, accessibility, and real-time experimentation, BabylonStudio provides a lightweight yet powerful tool that helps learners explore graphics programming, game development, and visual effects in an engaging and simplified way. 

### Section 1.2 Project Goals
Our team has established a series of complex goals which would help us to maintain a clear, focused and structured approach to our project as well as effectively address several core challenges:

__High Performance Rendering:__ Optimize Babylon.js workflows so that scene updates—like material tweaks, object manipulations, or runtime shader changes—display instantly, even on low spec computers. Our goal is to keep everything running smoothly in real time so users can freely experiment without worrying about slowdowns or interruptions.

__Advanced Shader and Visual Customization:__ Support real-time toggles or sliders for post-processing blocks with effects like fog, glow, or vintage filters, making it simple to experiment with different styles right away. This flexibility lets users quickly compare various looks and find the perfect rendering style for their project.

__User Friendly Interface:__ Provide intuitive drag-and-drop components that abstract away Babylon.js API complexities. Beginners can easily import 3D objects, adjust lighting, or test GPU shader variables.

__AI Guidance and Instant Feedback:__ Our fourth goal is to incorporate an AI assistant that offers real-time suggestions and tips whenever users are working on a scene. This helper could identify common pitfalls, recommend useful shader blocks, or alert if the changes might impact performance. By providing immediate feedback, we hope to streamline the learning curve and let users feel confident trying out new ideas.

__Correcting and refining Features:__ Our goal is to continuously shape the platform based on what people enjoy exploring in 3D world. Through regular feedback and user testing, we’ll keep refining features, adding new blocks, and improving our interface so that BabylonStudio stays closely aligned with real-world needs and creative interests.

### Section 1.3 SMART Criteria for our project

__Specific__ – Develop an intuitive, web-based platform using Babylon.js that allows students to explore 3D graphics, shaders, and post-processing techniques without needing advanced programming skills.

__Measurable__ – Implement at least five interactive features, such as object manipulation, material and texture editing, at least 6 shader effects, and real-time rendering. Ensure usability through user testing with at least 2 participants from different backgrounds.

__Achievable__ – Focus on creating a functional Minimum Viable Product (MVP) with core features like an interactive block-based UI, shader customization, and real-time visual feedback, ensuring the platform remains lightweight and responsive.

__Relevant__ – Address the learning gap in 3D development by making GPU shader exploration and post-processing techniques more accessible to students and developers who struggle with complex game engines.

__Time-bound__ – Complete the prototype within short time-frame, with milestones for features implementation, testing, and final deployment.

### Section 2 - Key Target Audience

Due to the nature of our project, we considered a small variety of individuals with different backgrounds, interests, and skill levels. We have listed several key target audiences below, each of whom influences our design and feature set in specific ways.

##### How We Gathered Requirements

We wanted to get a clear picture of who Babylon Studio is for, so we did some initial research and ran feedback sessions with users at different levels of 3D graphics experience(including complete beginners). These sessions helped us figure out what people really need and expect, letting us tailor our requirements so the platform stays easy to use and truly helpful.

### Section 2.1 – Students and Self-Learners
1.	**Accessible Resources:** Provide helpful quick tips, guides, and mini tutorials, so students can pick up 3D concepts without having to jump between different websites or books.

2.	Project-Based Approach
Support importing simple 3D models or textures to allow students to create projects that reinforce theoretical lessons.
3.	Basic to Advanced Progression
Provide a structured path from basic object manipulation to more advanced shader or post-processing features.
4.	Collaboration Support
Allow for easy sharing of scene configurations or block-based scripts, so classmates or online communities can exchange ideas.
5.	Lightweight Performance
Ensure the platform is not too demanding, making it usable on school computers or personal laptops with moderate specs.

### Section 2.1 – 3D Graphics Enthusiasts 
1.	Creative Experimentation
Provide a block-based interface that lets hobbyists experiment with materials, lighting, and visual effects without coding.
2.	Low Learning Curve
Ensure an intuitive UI so that newcomers to 3D graphics can quickly understand the tool and see results in real time.
3.	Quick Prototyping
Offer drag-and-drop elements for basic scene setup, allowing enthusiasts to rapidly visualize ideas before moving to more complex platforms.
4.	Immediate Feedback
Display changes instantly (e.g., adjusting shader parameters) to encourage exploration and learning through trial and error.

### Section 2.3 – Beginner Developers
1.	Gentle Introduction to Graphics Programming
Simplify complex 3D and GPU shader concepts using a visual or block-based interface before transitioning to raw JavaScript or GLSL code.
2.	Extensive Documentation
Offer in-platform references or external docs detailing how each block or effect works, helping developers bridge the gap between no-code and low-code.
3.	Scalable Feature Set
Make it possible to dive deeper (e.g., custom shader blocks) once users are comfortable with basic settings, encouraging continued learning.
4.	Prototype Validation
Provide real-time previews so developers can validate their ideas quickly, catching design flaws or performance bottlenecks early.

### Section 2.5 – General User Requirements
1.	Compatibility
Ensure the platform can run on typical web browsers and moderate hardware, allowing a broad user base to access Babylon Studio without extra installations.
2.	Documentation & Tutorials
Provide step-by-step tutorials or help guides so users can learn at their own pace and reference materials as needed.
3.	Developer Extensibility
Offer ways for more advanced users to create plugins, add custom effects, or integrate external libraries with minimal friction.
4.	Community Feedback Loop
Encourage a channel (forum, GitHub issues, etc.) for reporting bugs, suggesting improvements, and sharing best practices to continually refine the platform.

### Section 3 - Use Case Diagrams
### Section 3.1 - Students and Self-Learners