import Asaide from "@/components/Asaide";
import Main from "@/components/Main";
import Response from "@/components/Response";
import Search from "@/components/Search";
export default function Home() {
  return (
    <main className="grid grid-cols-6">
      <div className="bg-gray-900 col-span-1 aside z-10 text-gray-50">
        <Asaide>aside section</Asaide>
      </div>
      <div className="bg-gray-800 col-span-5 text-gray-50 min-h-screen h-full mb-40">
        <Main />
        <Search/>
      </div>
    </main>
  );
}
