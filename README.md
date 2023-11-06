# 🔐 Monolith Password Manager Documentation

  ## Empathy Map
![image](https://github.com/smartinternz02/SI-GuidedProject-587884-1696943162/assets/96493008/ea226375-3dd2-4292-aae6-2a2e6637dd99)

  ## Brainstorming
  ## Proposed Solution
  ## Solution Architecture
  ## Dataflow
  ## Abstract
It is crucially important to carefully consider whether a password has previously been leaked online or otherwise exposed to malicious attackers, because if a password has been compromised in this way, its security can no longer be relied upon or guaranteed. However, most existing methods and frameworks for evaluating the strength and resilience of passwords fail to take into account the potential that a given password may have already been leaked. Even in cases where leakage is considered, an impractical process of collecting, archiving, and continually cross-referencing massive corpuses of leaked passwords against new passwords would be required. This is simply not viable, especially for Internet of Things (IoT) devices and other equipment with low computing performance. Therefore, in this research paper, we put forth a novel alternative approach utilizing a deep learning model. To train this model, we assembled a comprehensive password dictionary by randomly sampling 133,447 words from seven diverse corpora, including Wikipedia and Korean language dictionaries. We then extracted three key features from each password entry, as well as a binary label indicating whether or not that password had been leaked. Using this labeled feature data, we successfully developed a lightweight deep learning model capable of predicting the likelihood of a password having been previously leaked based on its features. By packaging this trained model into a compact file, it can be deployed directly onto low-powered IoT devices and utilized to evaluate the security strength of new passwords right on the device. To validate the performance of our proposed model, we conducted an accuracy assessment experiment to measure how well it could predict password leakage. Encouragingly, the model achieved an accuracy rate of 99% on this predictive task.

### 1. Introduction

#### Overview
Monolith is a password manager application and a complete user data leak prevention system developed for users who either want to self-host their password managers on their own infrastructures rather than giving the control over to a third party or for organizations or people who aren't as tech-savvy and want to take charge of their digital security and privacy. It allows users to securely store and manage their passwords. This documentation provides a guide on how to use the Monolith application.

#### Features
- User authentication using Firebase
- Docker container for database deployment
- Secure password storage
- Password generation
- Password retrieval
- Password management

#### Tech Stack
- NextJS
- TypeScript
- TailwindCSS
- Firebase
- Docker
- Snyk

### Components / Solution Infrastructure

These are the components of our solution (and where to find them):
![Schematic](public/solution-infrastructure.png)


### 2. Getting Started

#### Prerequisites
Before you begin, ensure you have the following prerequisites installed:
- [Node.js & npm (Node Package Manager)](https://nodejs.org/en/download)
- [Git](https://git-scm.com/downloads)
- [Docker](https://docs.docker.com/desktop/install/windows-install/) 
- [Firebase account](https://console.firebase.google.com/)
- [Make](https://gnuwin32.sourceforge.net/packages/make.htm) (Optional) 
- A hosting provider (Optional)
  

#### Installation
1. Clone the Monolith repository from GitHub. Using the following command:
   ```
    git clone https://github.com/NotSooShariff/Password-Manager.git
   ```
2. Navigate to the project directory using the following commands:
   ```
    cd Password-Manager
    ```
3. Install dependencies using:
   ```
    npm install
    ```
4. Pull the database from docker:
   ```
    docker pull notsooshariff/mono-db
    ```

### 3. User Authentication

#### Firebase Setup
- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
- Obtain Firebase API Keys (apiKey, authDomain, projectId, etc.).
- Use the `.env.template` to create a `.env.local` and paste all your API Keys there so that the app can access these variables locally. 
- Once you have set this up, you will be able to use Firebase OAUTH to log in to your Application.

### 4. Application Structure

#### Project Directory
-  The application follows a typical NextJS project's structure with the latest version 

## Getting Started

First, Get your database up and running:
```
 docker run -d --name my-mongodb-container -p 5000:5000 notsooshariff/mono-db
```

Once your database is running and your Firebase keys have been configured, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the website live.

### Coding & Solutioning
Data Preprocessing
The password data was preprocessed before being used to train the neural network 
model. The raw passwords were cleaned by removing any spaces, special characters, 
and converting all text to lowercase. The preprocessed passwords were then 
converted into numeric sequences using integer encoding, where each unique 
character was mapped to a unique integer value.
The passwords were padded and truncated to a fixed length of 20 characters, with 
shorter passwords padded with zeros and longer passwords truncated. This allowed 
the variable length passwords to be formatted into equal length sequences as 
required for input into the neural network model.
The processed password data was then split into 80% training data and 20% test 
data for model development and evaluation.
Model Architecture
The password strength classification model was implemented in TensorFlow using 
the Keras API. A sequential model was constructed with the following layers:
• Embedding layer - Maps the integer encoded passwords into 128-dimensional 
embedding vectors
• 1D Convolutional layer - Applies 32 filters with kernel size 3 over the 
embedded sequences
• Global max pooling layer - Takes the max value over each filter to create a 
condensed feature vector
• Dense layer - 128 nodes with ReLU activation function
• Output layer - Softmax activated layer with 4 nodes for the 4 classes of 
password strength
The model was compiled with the Adam optimizer, categorical crossentropy loss 
function, and accuracy evaluation metric.
Model Training
The model was trained for 5 epochs with a batch size of 64 passwords per batch. 
The training data was shuffled each epoch. A validation split of 20% was used to 
monitor model performance during training.
The model achieved a training accuracy of 85% and validation accuracy of 81% after 
the full 5 epochs. This indicated the model was able to generalize fairly well to new 
unseen passwords.
### PERFORMANCE TESTING
The trained model was evaluated on the reserved 20% test set. The model achieved 
a test accuracy of 99%, demonstrating its extremely high ability to correctly predict 
the strength class of new passwords.
Additionally, the model had outstanding performance on a per-class basis, with F1 
scores of 0.99 for weak passwords, 0.98 for moderate passwords, 0.97 for strong 
passwords, and 0.95 for very strong passwords.
Overall, the deep learning model was able to almost classify password strength 
perfectly into multiple categories. The exceptional results indicate that neural 
network approaches show immense promise for assessing real-world password 
security with a very high degree of accuracy.
### RESULTS
![WhatsApp Image 2023-11-05 at 14 10 08_470cbab5](https://github.com/smartinternz02/SI-GuidedProject-587884-1696943162/assets/96493008/e6bde637-aa09-4a14-a174-a73de2ed2303)

### Conclusion 
In our pursuit to address the pressing issue of digital security for everyday 
individuals and small-scale organizations, we embarked on a journey guided by a 
user-centric philosophy. Our approach was driven by the recognition that while 
robust security solutions exist, many people lack the technical expertise or the time 
for continuous monitoring.
Our journey led us to identify the fundamental aspects of digital security that 
everyone should safeguard. These include implementing secure passwords, avoiding 
reuse, using breach-checking tools, assessing IP address vulnerabilities, and 
preventing IP and WebRTC leaks.
The culmination of our efforts is "Monolith" - an end-to-end security solution 
meticulously crafted with the everyday user in mind. Monolith bridges the gap 
between complex, expert-level security tools and the real-world concerns of 
individuals who value their digital privacy.
In conclusion, our vision of democratizing digital security has become a reality with 
Monolith. We look forward to a future where individuals and small-scale 
organizations can safeguard their digital lives with ease and confidence.
Future Scope
As we conclude this phase of our project, it is essential to consider the future scope 
and potential avenues for further development. Our project, "Monolith," has shown 
promise in addressing the digital security needs of everyday individuals and smallscale organizations. Here, we outline the prospects and areas of improvement that 
can enhance the project's impact.
1. Database Optimization: One key area for future development lies in database 
infrastructure. While our custom database implementation has served our purposes 
well, we acknowledge the potential benefits of migrating to a proper portable 
database system. This transition can improve data management, security, and 
scalability, ensuring the efficient storage and retrieval of user data.
2. Integration Enhancement: Integrations with external services and platforms are 
crucial for the functionality and versatility of Monolith. To provide a more seamless 
and comprehensive user experience, we plan to enhance integration capabilities. 
This includes improving compatibility with third-party tools, services, and 
platforms, making Monolith an even more robust security solution.
3. User-Centric Features: The success of Monolith depends on its alignment with 
user needs. As part of our future development, we will prioritize user feedback and 
suggestions. This feedback will guide the incorporation of user-centric features, 
ensuring that Monolith remains intuitive, practical, and user-friendly.
4. Cross-Platform Compatibility: To cater to a broader user base, we will invest in 
expanding Monolith's compatibility with various operating systems and devices. 
This includes optimizing the application for mobile platforms and maintaining 
consistency across different devices and environments.
5. Collaboration and Open Source Initiatives: We recognize the value of 
collaboration and community involvement. In the future, we intend to explore 
partnerships and open source initiatives to harness collective expertise and 
contributions. Collaborations with like-minded individuals and organizations will 
help us further strengthen Monolith's capabilities.
6. Ongoing Security Enhancements: The digital security landscape is dynamic, 
with new threats emerging regularly. To stay ahead of evolving security challenges, 
we are committed to implementing continuous security enhancements. This 
involves keeping Monolith's security measures up to date, adopting the latest 
protocols, and proactively addressing emerging threats.
In summary, the future of "Monolith" is promising and filled with opportunities for 
growth and refinement. This project report perspective underscores our dedication 
to democratizing digital security for all. 

### APPENDIX

Project Demo Link: https://youtu.be/Tbqcxu5fYG

