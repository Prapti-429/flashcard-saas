# Flashcard SaaS

A SaaS platform for creating and managing flashcards, built with **Next.js**, **Clerk**, **Firebase**, **OpenAI**, and **Stripe**.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [License](#license)

## Introduction
Flashcard SaaS is a web application that allows users to create, manage, and study flashcards. Users can sign up for an account, create flashcards, and utilize AI-powered features to generate content. The platform also supports subscription-based payments through Stripe.

## Features
- **User Authentication:** Secure authentication powered by Clerk.
- **Flashcard Creation:** Create, edit, and delete flashcards.
- **AI Integration:** Generate flashcard content using OpenAI's API.
- **Subscription Payments:** Integrate Stripe for managing subscription payments.
- **Responsive Design:** Fully responsive UI for all devices.

## Tech Stack
- **Frontend:** Next.js (React Framework)
- **Authentication:** Clerk
- **Backend:** Firebase (Firestore)
- **AI:** OpenAI API
- **Payments:** Stripe
- **Styling:** CSS Modules / Tailwind CSS (optional)

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- Firebase account
- Stripe account
- OpenAI account
- Clerk account

### Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/flashcard-saas.git
    cd flashcard-saas
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up Firebase:**
   - Create a Firebase project and add a web app to get your Firebase configuration.
   - Set up Firestore for storing flashcards.
   - Enable Firebase Authentication if required.

4. **Set up Stripe:**
   - Create a Stripe account and obtain your secret key.
   - Configure webhooks for handling events.

5. **Set up OpenAI:**
   - Create an OpenAI account and obtain your API key.

6. **Set up Clerk:**
   - Create a Clerk account and configure your frontend API keys.

### Environment Variables
Create a `.env.local` file in the root directory and add your environment variables:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
NEXT_PUBLIC_CLERK_API_KEY=your_clerk_api_key
OPENAI_API_KEY=your_openai_api_key
