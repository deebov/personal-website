/* eslint-disable react/prop-types */
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import myPhoto from '../images/me.jpg';

const ExtenalLinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    focusable="false"
    role="presentation"
    className="w-4 h-4 inline"
  >
    <g fill="none" stroke="currentColor" strokeLinecap="full" strokeWidth="3">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <path d="M15 3h6v6"></path>
      <path d="M10 14L21 3"></path>
    </g>
  </svg>
);

const ExternalLink = (props) => (
  <a href={props.link} title={props.title} className="">
    <h2 className="hover:underline text-lg underline  lg:text-xl hover:text-blue-500">
      {props.title} <ExtenalLinkIcon />
    </h2>
  </a>
);

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          'Dilshod Turobov',
          'deebov',
          'software developer',
          'react.js developer',
          'front-end developer',
          'mobile app developer',
        ]}
        title="Dilshod Turobov"
      />

      <div className="px-2 lg:px-0 relative">
        <div className="lg:-translate-x-full transform left-0 top-0 lg:absolute">
          <img
            className="rounded-lg w-56 h-56 lg:w-40 lg:h-40 object-cover"
            src={myPhoto}
            alt="Dilshot Turobov"
          />
          <h2 className="lg:hidden mb-4 mt-4 text-lg">
            Dilshod Turobov, 18 y.o.
          </h2>
          <h2 className="hidden lg:block mb-4 mt-4 text-lg">
            Dilshod Turobov
            <br />
            18 y.o.
          </h2>
          <div className="hidden lg:block">
            <a
              href="mailto:deebov@yandex.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              deebov@yandex.com
            </a>
            <div className="mt-4 flex text-blue-300">
              <a
                href="https://github.com/deebov"
                rel="noreferrer"
                target="_blank"
                title="Go to my Github"
                className="hover:text-blue-500"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/deebov"
                rel="noreferrer"
                target="_blank"
                title="Go to my LinkedIn"
                className="hover:text-blue-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="ml-2 w-6 h-6"
                  fill="currentColor"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/deebovv"
                rel="noreferrer"
                target="_blank"
                title="Go to my LinkedIn"
                className="hover:text-blue-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="ml-2 w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 lg:mt-0 lg:pl-8">
          <h1 className="text-2xl lg:text-3xl">
            Hey there, I am a software developer focused in startups and
            companies with unique vision of the future and desire to make the
            world a better place
          </h1>
          <h1 className="mt-16 text-2xl lg:text-3xl">
            Projects I&apos;ve worked on:
          </h1>
          <div className="mt-12">
            <ExternalLink
              link="onboarding.foundingbird.com"
              title="FoundingBird Onboarding app"
            />

            <p className="mt-4 max-w-lg">
              Onboarding web app that is used to create a new incorporation
              within a few minutes.{' '}
              <span className="text-blue-300">
                Managing more than 50 form fields
              </span>{' '}
              while keeping the UI & UX simple and clean to ease the onboarding
              flow.
            </p>
          </div>
          <div className="mt-12">
            <ExternalLink
              link="onboarding.foundingbird.com"
              title="Malaysian Digital Hub"
            />
            <p className="mt-4 max-w-lg">
              New tech startups and entrepreneurs go-to web app that helps them
              to
              <strong> Start, Grow and Scale</strong> in Malaysia.{' '}
              <span className="text-blue-300">
                Built witnin less than 3 weeks till the demo day.
              </span>
            </p>
          </div>
          <div className="mt-12">
            <ExternalLink
              link="onboarding.foundingbird.com"
              title="React Native Stories"
            />

            <p className="mt-4 max-w-lg">
              3rd party library for creating Vertical stories in React Native
              applications
            </p>
          </div>
          <div className="mt-12">
            <ExternalLink link="#" title="Kaunto (taked down)" />

            <p className="mt-4 max-w-lg">
              Crypto accounting & bookkeeping web app that has rich
              functionality of managing and keeping track of crypto wallets
            </p>
          </div>
        </div>
        <div className="lg:hidden py-8 mt-16 lg:mt-0 lg:pl-8">
          <h2 className="text-2xl" id="contacts">
            Contacts
          </h2>
          <div className="mt-6">
            <a
              href="mailto:deebov@yandex.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              deebov@yandex.com
            </a>
            <div className="mt-4 flex text-blue-300">
              <a
                href="https://github.com/deebov"
                rel="noreferrer"
                target="_blank"
                title="Go to my Github"
                className="hover:text-blue-500"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/deebov"
                rel="noreferrer"
                target="_blank"
                title="Go to my LinkedIn"
                className="ml-6 hover:text-blue-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/deebovv"
                rel="noreferrer"
                target="_blank"
                title="Go to my LinkedIn"
                className="ml-6 hover:text-blue-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
