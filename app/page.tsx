import StudentCard from "./components/StudentCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <StudentCard 
        name="Zef Kevin A. Montera" 
        course="BSIT" 
        year="2nd Year" 
      />
    </main>
  );
 }