import React from "react";

export default function TestPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Test Page</h1>
      <p>If you can see this, routing is working!</p>
      <p>Current time: {new Date().toLocaleString()}</p>
    </div>
  );
} 