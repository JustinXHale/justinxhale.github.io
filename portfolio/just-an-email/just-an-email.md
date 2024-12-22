---
layout: default
title: It’s Just an Email
parent: Portfolio
nav_order: 1
---
<!-- This section will include my Table of Contents. In the terminal run [npx markdown-toc -i README.md] to update must be in correct directory. -->

## 📚 Table of Contents

<!-- toc -->

- [It’s Just an Email](#its-just-an-email)
  * [Overview](#overview)
  * [Background](#background)
  * [Problem(s)](#problems)
  * [Solution](#solution)
  * [My Role](#my-role)
  * [Interviews](#interviews)
  * [Define](#define)
  * [Ideate](#ideate)
  * [Prototype](#prototype)
  * [Test & Iterate](#test--iterate)
  * [Project Learnings](#project-learnings)
  * [Deliverables](#deliverables)

<!-- tocstop -->

# It’s Just an Email  
**Case study read time:** 6–10 minutes  

## Overview  
- **Project Scope:** 4 weeks  
- **Project Type:** Assignment  
- **Role:** UX Design, UI Design, Copywriter, Light HTML Coder  
- **Tools:** Paper, Pencil, Figma, Miro, Photoshop, Brackets, WebAIM Contrast Checker  
- **UX Techniques:** Stakeholder interviews, Secondary Research, Customer Flow, Sketching, Wireframing  
- **Participants:** Integral Staff, Application Development  

## Background  
Integral Care supports the health and well-being of adults and children living with mental illness, substance use disorder, and intellectual and developmental disabilities. This non-profit supported over half a million people in 2020, and as it expanded its telehealth services, they wanted to improve customer retention and satisfaction with their emails.

## Problem(s)  
Clients receive a lot of information in their initial and only email. Feedback from Integral staff revealed the following issues:  
- Email is long and complicated  
- Content is confusing to understand  
- Difficulty retrieving email before/during appointments  

## Solution  
Developed a responsive HTML email template that integrates with the client’s mail client, allowing users to save appointments and reminders directly to their native calendar.

## My Role  
### Emphasize
I managed most aspects of the project, from initial stakeholder interviews to ideation, prototyping, user testing, and coding, before handing it off to the application developer for final implementation.

![A photo of Justin X. Hale holding up a peace sign during a Zoom meeting, smiling at the camera.](/portfolio/just-an-email/assets/zoom-email-pic.jpg "Zoom Meeting Photo of Justin X. Hale")

## Interviews  
During the discovery phase, I conducted interviews with the Director of Clinical Services and the Program Manager Supervisor of the Call Center to better understand the problem.  

### Guiding Questions  
- What is the process your user goes through before receiving an email?  
- What is the purpose of the email?  
- What do you want to accomplish with the email?  
- Who receives the email?  
- Is there a follow-up email?  
- What have customers told you about the email?  
- Demographics of clients  

## Define  
### Client Journey  
To visualize how clients find and interact with the service, I created a Customer Journey Map to understand their pain points and provide a bird’s-eye view for stakeholders.

![A customer journey map highlighting phases like Phone Call, Onboarding/Confirmation, and Before/After Appointment, with insights into customer thoughts, feelings, and opportunities.](/portfolio/just-an-email/assets/Email-Customer-Journey.png "Customer Journey Map")

## Ideate  
### Initial Sketches  
I started with hand-drawn sketches to brainstorm ideas before transitioning to digital tools. I also conducted desktop research to analyze email templates used by other organizations.  

![A follow-up email mockup showing a question asking, 'How was our service?' and including a thank-you message, crisis graphic, and survey invitation with rating options.](/portfolio/just-an-email/assets/Appt-Email-Revision-page-9.png "Follow-Up Email Mockup")

![An appointment confirmation email with a clear hierarchy including personalized details, date, time, location, and integrated buttons to save, call, or join the meeting.](/portfolio/just-an-email/assets/Appt-Email-Revision-page-11.png "Appointment Confirmation Email")

![A hand-drawn wireframe showing the layout for an email template, featuring an IC logo at the top, text content in the middle, and three buttons at the bottom for user actions.](/portfolio/just-an-email/assets/Appt-Email-Revision-page-14.png "Hand-Drawn Wireframe for Email Layout")

## Prototype  
### Color Visualization  
To better understand the number of touchpoints in the email, I created a color-coded visualization of the content. This helped stakeholders see the distribution of information at a glance.  

![An appointment confirmation email with a clear hierarchy including personalized details, date, time, location, and integrated buttons to save, call, or join the meeting.](/portfolio/just-an-email/assets/Appt-Email-Revision-page-11.png "Appointment Confirmation Email")

**Color Decoder**:  
- **Grey:** Text  
- **Dark Blue:** Notice  
- **Light Blue:** H1 or Link  
- **Red:** H1  
- **Purple:** Link  

[Figma Board](https://www.figma.com/file/KXUPDRtNm3yG9OGWqIgclT/Client-Appt-Email-Meeting?node-id=0%3A1)

![A side-by-side comparison of Gmail on desktop and mobile, illustrating the email’s responsive design adjustments.](/portfolio/just-an-email/assets/Gmail-vs-Phone.png "Gmail vs. Phone Email View")

![A mobile view of an email from Integral Care confirming a 60-minute appointment, featuring options to add to Google Calendar, join the meeting, or call to cancel or reschedule.](/portfolio/just-an-email/assets/phoneview.png "Mobile View of Appointment Confirmation Email with Action Buttons")

### Wireframes  
Based on sketches, I created high-fidelity wireframes for desktop and mobile views.  

**Required Components**:  
- Microsoft Teams meeting information  
- Help video  
- Crisis helpline phone number  

**Recommended Additions**:  
- Shorten email content from 2,220+ characters to under 600  
- Add-to-calendar feature  
- Call-to-reschedule button  
- Helpline button with direct dial prompts  

![A redesigned email showing a Microsoft Teams meeting invitation with clear buttons for rescheduling, joining the meeting, and contacting a crisis helpline.](/portfolio/just-an-email/assets/fullAppointment.png "Redesigned Appointment Email")

#### Solicit Opinion
After I completed the mockup I connected with the Senior Creative Designer asked a trusted co-worker about their option of the layout. Together we decided on some element and layout changes that saved space and highlighted some key areas. (You’ll see in the next section 🙂 )

---

## Test & Iterate  
### Coding the Email  
Given the tight 4-week deadline, I coded the email in HTML using VSCode to expedite the process. This saved time for the MIS team and allowed faster implementation.

![A screenshot showing the HTML and CSS code for an appointment confirmation email alongside its rendered output, featuring buttons for adding to a calendar, rescheduling, and crisis helpline information.](/portfolio/just-an-email/assets/coding.png "HTML and CSS Code with Rendered Email Output")


**Feedback**:  
*"This is great. This saves a lot of time!" – Andrew, Applications Developer*

Using my code, the application developer completed a project that would have taken one week in just 30 minutes. Dynamic Microsoft Teams links and calendar integration streamlined the user experience.

![A mobile screenshot of an appointment confirmation email, featuring a Teams invitation with options to join the meeting, call to reschedule, and view crisis helpline information.](/portfolio/just-an-email/assets/testing-code.png "Mobile Screenshot of Teams Appointment Confirmation Email")

### We’re almost done.
Using my code, the application developer was able to take a project that would have taken at least one week and pushed it out in 30 minutes!
Using dynamic Microsoft Teams links and the client’s native email client for their appointment, allowed us to remove another button, giving the client choices to click on.

[Thanks, Hick Hyman!](https://lawsofux.com/hicks-law/)

## Project Learnings  
### Key Takeaways  
- **Less Is More**: Simplicity improves user engagement.  
- **Accessibility Matters**: Font sizes, color contrast, and alt text were prioritized.  
- **Collaboration is Key**: Working closely with stakeholders enhanced the final product.  

## Deliverables  
### Before  
The original email was lengthy, unclear, and not user-friendly.
![An original email template from Integral Care providing instructions for joining Microsoft Teams appointments, including steps for both computers and smart devices, troubleshooting, and crisis helpline information.](/portfolio/just-an-email/assets/Original-Email.png "Original Email Template with Instructions and Support Information")

### After  
The redesigned email was concise, accessible, and responsive, featuring dynamic functionality like calendar integration and direct-dial buttons.  

![A side-by-side comparison of Gmail on desktop and mobile, illustrating the email’s responsive design adjustments.](/portfolio/just-an-email/assets/Gmail-vs-Phone.png "Gmail vs. Phone Email View")

### Dark Mode
![A high-contrast dark mode view of the appointment confirmation email designed to improve accessibility for users with visual impairments.](/portfolio/just-an-email/assets/dark-mode.png "Dark Mode View of Email")


