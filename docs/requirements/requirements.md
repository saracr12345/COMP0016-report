---
id: requirements
title: Requirements
slug: /requirements
hide_table_of_contents: false
sidebar_position: 0
sidebar: false
---

<div class="brown">

# Requirements

## Section 1 - Project Overview

### Section 1.1 - Project Introduction and Background
</div>
BabylonStudio is a fun and interactive web-based platform designed to introduce kids (ages 5-10) to 3D creation in school. It leverages Babylon.js for real-time rendering and integrates the ReShade API to enhance visual effects through accessible, block-based controls, making it easy and exciting for young learners to explore 3D development.

The platform helps young kids go beyond just learning about 3D by letting them explore and experiment hands-on. It provides a simple, no-code environment where they can play with different materials, lighting, and cool effects like metallic surfaces or glowing objects. Kids can easily change how things look in their 3D world without needing to know complicated coding.

By focusing on usability, accessibility, and real-time experimentation, BabylonStudio provides a lightweight yet powerful tool that helps learners explore graphics programming, game development, and visual effects in an engaging and simplified way.
<div class="brown">

### Section 1.2 - Project Goals
</div>
Our team has established a series of complex goals which would help us to maintain a clear, focused, and structured approach to our project as well as effectively address several core challenges:

<span class="orange">__High Performance Rendering:__</span> Optimize Babylon.js workflows so that scene updates—like material tweaks, object manipulations, or runtime shader changes—display instantly, even on low spec computers. Our goal is to keep everything running smoothly in real time so users can freely experiment without worrying about slowdowns or interruptions.

<span class="orange">__Advanced Shader and Visual Customization:__</span> Support real-time toggles or sliders for post-processing blocks with effects like metallic, rough, or retro filters, making it simple to experiment with different styles right away. This flexibility lets users quickly compare various looks and find the perfect rendering style for their project.

<span class="orange">__User-Friendly Interface:__</span> Provide intuitive drag-and-drop components that abstract away Babylon.js API complexities. Beginners can easily import 3D objects, adjust lighting, or test GPU shader variables.

<span class="orange">__AI Guidance and Instant Feedback:__</span> Our fourth goal is to incorporate an AI assistant that offers real-time suggestions and tips whenever users are working on a scene. This helper could identify common pitfalls, recommend useful shader blocks, or alert if the changes might impact performance. By providing immediate feedback, we hope to streamline the learning curve and let users feel confident trying out new ideas.

<span class="orange">__Correcting and Refining Features:__</span> Our goal is to continuously shape the platform based on what people enjoy exploring in the 3D world. Through regular feedback and user testing, we’ll keep refining features, adding new blocks, and improving our interface so that BabylonStudio stays closely aligned with real-world needs and creative interests.
<div class="brown">

### Section 1.3 - SMART Criteria for Our Project
</div>
<span class="orange">**Specific**</span> – Develop an intuitive, web-based platform using Babylon.js that allows students to explore 3D graphics, shaders, and post-processing techniques without needing advanced programming skills.

<span class="orange">**Measurable**</span>  – Implement at least five interactive features, such as object manipulation, material and texture editing, at least 5 shader effects, and real-time rendering. Ensure usability through user testing with at least 2 participants from different backgrounds.

<span class="orange">**Achievable**</span>  – Focus on creating a functional Minimum Viable Product (MVP) with core features like an interactive block-based UI, shader customization, and real-time visual feedback, ensuring the platform remains lightweight and responsive.

<span class="orange">**Relevant**</span>  – Address the learning gap in 3D development by making GPU shader exploration and post-processing techniques more accessible to students and developers who struggle with complex game engines.

<span class="orange">**Time-bound**</span>  – Complete the prototype within a short timeframe, with milestones for feature implementation, testing, and final deployment.

---
<div class="brown">

## Section 2 - Key Target Audience
</div>
Due to the nature of our project, we designed BabylonStudio based on the needs of young learners who are just beginning to explore 3D creation. We focused on making the platform intuitive, playful, and accessible, ensuring that users can experiment freely. We have outlined our key target audiences below, which directly influence our design decisions and feature development.

<div class="brown">

#### How We Gathered Requirements
</div>
We wanted to get a clear picture of who Babylon Studio is for, so we did some initial research and ran feedback sessions with users. These sessions helped us figure out what our users really need and expect, letting us refine our requirements so the platform stays easy to use and truly helpful.
<div class="brown">

### Section 2.1 – 8-Year-Old Student
</div>

<span class="orange">1. **Gentle introduction to the 3D world:**</span> Help children take their first steps into 3D creation with a visual block-based interface that makes complex concepts easy to understand. By exploring shapes, colors, and movement, young learners can discover the fundamentals of 3D graphics in a fun and intuitive way.

<span class="orange">2. **Easy to learn:**</span> An intuitive UI ensures beginners can quickly grasp the basics and see results in real time.

<span class="orange">3. **Creative experimentation:**</span> Experiment freely with materials, lighting, and visual effects without coding.

<span class="orange">4. **Fast prototyping:**</span> Drag and drop elements to build scenes effortlessly—similar to a Scratch interface—making it easy to test ideas before diving into advanced tools.

<span class="orange">5. **Clear guidance using AI:**</span> Our AI will offer guided, step-by-step tutorials with real-time feedback to help children explore 3D rendering, object transformations, and shader effects in an engaging and intuitive way.

<span class="orange">6. **Project imports:**</span> Support importing simple 3D models or textures to allow students to create or build small projects where they can experiment with different visual styles.

<span class="orange">7. **Live view (Instant feedback):**</span> See changes instantly as you tweak objects, materials, and shaders, making it easier to understand cause and effect in 3D development.

---
<div class="brown">

### Section 2.2 – General User Requirements
</div>
<span class="orange">1. **Easy use:**</span> Leverage Babylon.js as the core framework to create, render, and customize 3D scenes that can run on typical web browsers and moderate hardware, allowing a broad user base to access Babylon Studio without extra installations. This ensures accessibility and cross-platform functionality.

<span class="orange">2. **AI assistant:**</span> Integrate an AI helper that provides suggestions and step-by-step guidance when users add or modify blocks.

<span class="orange">3. **Simple interaction for 3D Effects:**</span> Enable users to apply shader effects and modify 3D environments using a simple, intuitive block-based interface, making complex visual effects more accessible.

<span class="orange">4. **Smooth performance on all devices:**</span> Ensure Babylon Studio remains lightweight and optimized, allowing it to run smoothly on standard low-spec/school computers and everyday laptops without requiring high-end hardware.

---
<div class="brown">

## Section 3 - Use Case Diagrams
</div>
Use cases are crucial in understanding the functional requirements of a system or software from an end-user perspective.

<div class="brown">

### Section 3.1 - 8-Year-Old Student Use Case Diagram

</div>