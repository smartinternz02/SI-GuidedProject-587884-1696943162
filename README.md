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
