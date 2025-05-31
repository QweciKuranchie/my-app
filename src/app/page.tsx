"use client"
  
import Counter from "./components/counter";   

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundColor: 'blue' }}>
      <Counter />  
    </div>
  );
}