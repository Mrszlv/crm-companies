import Header from './components/header';
import Sidebar from './components/sidebar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="ml-60">
      <Header>Home page</Header>
      <h2 className="text-center font-semibold text-2xl mt-2 mb-2 ">
        Promotions & Discounts Web Application for Companies – Built with
        Next.js
      </h2>
      <p className="ml-5 mr-5 mb-3">
        This web application is designed for businesses to efficiently manage
        and showcase their discounts, special offers, and promotional campaigns.
        Developed using Next.js, it offers a fast, scalable, and SEO-friendly
        platform tailored to both small and large enterprises.
      </p>
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2 mr-20">
          <h2 className="text-center font-semibold text-xl mt-2 mb-2">
            Key Features:
          </h2>
          <ul className="flex flex-col">
            <li className="mb-2">
              <p className="ml-5 font-semibold">
                - Dynamic Campaign Management
              </p>
              <p className="ml-6">
                Easily create, edit, and schedule promotional campaigns through
                a user-friendly dashboard.
              </p>
            </li>
            <li className="mb-2">
              <p className="ml-5 font-semibold">
                - Discount Listings & Filters
              </p>
              <p className="ml-6">
                Users can browse all available offers with advanced filtering by
                category, date, or popularity.
              </p>
            </li>
            <li className="mb-2">
              <p className="ml-5 font-semibold">
                - Authentication & Company Profiles
              </p>
              <p className="ml-6">
                Secure login system for companies to manage their promotions.
                Each company gets a public profile with all active offers.
              </p>
            </li>
            <li className="mb-2">
              <p className="ml-5 font-semibold">- Real-Time Countdown Timers</p>
              <p className="ml-6">
                Eye-catching countdowns for limited-time promotions to increase
                urgency and conversions.
              </p>
            </li>
            <li className="mb-2">
              <p className="ml-5 font-semibold">
                - Newsletter & Notification Integration
              </p>
              <p className="ml-6">
                Users can subscribe to receive updates on new promotions or
                expiring deals.
              </p>
            </li>
            <li className="mb-2">
              <p className="ml-5 font-semibold">- Analytics Dashboard</p>
              <p className="ml-6">
                Companies can track the performance of each campaign, including
                views, clicks, and conversions.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-1/2">
          <h2 className="text-center font-semibold text-xl mt-2 mb-2">
            Tech Stack:
          </h2>
          <ul className="flex flex-col mb-10">
            <li className="mb-2">
              <p className="ml-5 font-semibold">
                - Frontend & SSR: Next.js (React-based framework)
              </p>
            </li>
            <li className="mb-2">
              <p className="ml-5 font-semibold">
                - Styling: Tailwind CSS / CSS Modules
              </p>
            </li>
            <li className="mb-2">
              <p className="ml-5 font-semibold">- Database: mokapi.io</p>
            </li>
            <li className="mb-2">
              <p className="ml-5 font-semibold">
                - Authentication: NextAuth.js
              </p>
            </li>
            <li className="mb-2">
              <p className="ml-5 font-semibold">- Deployment: Vercel</p>
            </li>
          </ul>
          <Image width={395} height={262} src="/images/world.svg" alt="world" />
        </div>
      </div>
      <Sidebar />
    </main>
  );
}
