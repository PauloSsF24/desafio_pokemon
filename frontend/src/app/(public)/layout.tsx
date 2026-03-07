import Navbar from "@/components/Navbar";
import "../../app/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function PublicLayout({ children }: any) {
  return (  
    <div className={poppins.className + " bg-gray-100"}>

        <Navbar />

        <main className="max-w-6xl mx-auto p-8">
          {children}
        </main>

    </div>
  );
}