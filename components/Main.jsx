import Ask from "./Ask";
import Response from "./Response";

export default function Main() {
  return (
    <div className="container mx-auto w-3/5 py-5">
      {/* Ask component */}
      <Ask />
      {/* Response component */}
      <Response/>
    </div>
  );
}
