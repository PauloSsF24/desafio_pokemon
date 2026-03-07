import Sidebar from "@/components/Sidebar";

export default function AdminLayout({ children }: any) {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <main className="flex-1 p-10 bg-gray-100">
        {children}
      </main>

    </div>
  );
}