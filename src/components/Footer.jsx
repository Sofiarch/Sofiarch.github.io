import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t py-6 text-center bg-teal-200">
      <div className="max-w-screen-xl mx-auto px-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} LineX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}