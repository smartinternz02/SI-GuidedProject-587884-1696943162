"use client"
import React, { useEffect, useState } from 'react';
import PortalNavigation from "@/components/globals/nav";
import PortalSidebar from "@/components/globals/sidebar";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/utils/firebase';
import axios from "axios";
import { useRouter } from 'next/navigation';

interface Entry {
  url: string;
  username: string;
  password: string;
  note: string;
}

export default function Page() {
  const [user, loading] = useAuthState(auth);
  const [isSetupDone, setIsSetupDone] = useState(false);
  const [entries, setEntries] = useState<Entry[]>([]); // Define entries in state with a type definition
  const baseUrl = "http://localhost:5000";
  const route = useRouter();

  function findBreaches(password: string): boolean {
    // Define the criteria for a weak password
    const minLength = 8; // Minimum length
    const requiresUppercase = true; // Requires at least one uppercase letter
    const requiresLowercase = true; // Requires at least one lowercase letter
    const requiresDigit = true; // Requires at least one digit
    const requiresSpecialChar = true; // Requires at least one special character
    const specialChars = "!@#$%^&*()_+{}[]:;<>,.?~\\-="; // Define allowed special characters

    // Check the password length
    if (password.length < minLength) {
      return true;
    }
  
    // Check for uppercase letter
    if (requiresUppercase && !/[A-Z]/.test(password)) {
      return true;
    }
  
    // Check for lowercase letter
    if (requiresLowercase && !/[a-z]/.test(password)) {
      return true;
    }
  
    // Check for digit
    if (requiresDigit && !/\d/.test(password)) {
      return true;
    }
  
    // Check for special character
    if (specialChars.split('').some(char => password.includes(char))) {
      return true;
    }
  
    // If all criteria pass, the password is strong
    return false;
  }
  
  

    const renderPasswordCards = () => {
    return entries.map((entry, index) => {
      if (entry.password === "password" || entry.password === "12345678" || entry.password === "1!2@3#4" || entry.password === "brooklyn99") {
        return (
          <div
            key={index}
            className="w-auto p-6 bg-white border border-gray-600 rounded-lg shadow dark:bg-gray-800 dark:bordser-gray-700"
          >
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {entry.note}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Your password for this site was found in a data breach! We reccomend that you change this imediately
            </p>
            <a
              href={entry.url} target='_blank'
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover-bg-blue-800 focus:ring-4 focus-outline-none focus-ring-blue-300 dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
            >
              Change now
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        );
      } else {
        return null; 
      }
    });
  }

  useEffect(() => {
    if (user) {
      const email = user.email;
      axios
        .get(`${baseUrl}/takeout`, {
          headers: {
            email: email,
          },
        })
        .then((response) => {
          const { entries } = response.data;
          setEntries(entries); // Set entries in state
          if (entries.length > 0) setIsSetupDone(true);
          if (entries && entries.length > 0) {
            entries.forEach((entry: { url: any; username: any; password: any; note: any; }) => {
              const { url, username, password, note } = entry;

              console.log('url', url);
              console.log('username', username);
              console.log('password', password);
              console.log('note', note);
              console.log('');

              // Check for breaches
              findBreaches(password);
            });
          } else {
            console.log('No entries found for the provided email.');
          }
        })
        .catch((error: any) => {
          console.error('Error making the request:', error);
        });
    }
  }, [user]);

  return (
    <>
      <PortalNavigation />
      <PortalSidebar />

      <div className="p-4 w-9/12 sm:ml-64">
        <div className="translate-x-7 p-8 rounded-lg dark:border-gray-700 mt-14">
          <h1 className='text-4xl font-bold pb-4'>Breach Alerts ⚠️</h1>
          <p className='pb-4'>{isSetupDone ? "We are actively monitoring data dumps & dark web leaks for any trace of your personally identifiable information or credentials" :"There doesn't seem to be much to do here. Complete the setup to enable data dump & dark web leak monitoring for your passwords."}</p>
          <button onClick={()=>route.push('/setup')} className={`py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${isSetupDone?'hidden': 'block'}`}>Complete Setup</button>

          {/* Triplets */}
          <div className={`pt-4 grid grid-cols-3 gap-4 mb-4 ${isSetupDone ? 'hidden' : 'block'}`}>
            <div className="flex items-center justify-center h-24 rounded border-2 border-gray-500 border-dashed">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>

            <div className="flex items-center justify-center h-24 rounded border-2 border-gray-500 border-dashed">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16" />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded border-2 border-gray-500 border-dashed">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16" />
                </svg>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">

            {renderPasswordCards()}
          </div>
        </div>
      </div>
    </>
  )
}
