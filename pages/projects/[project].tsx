import SEO from "../../components/SEO";
import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../../components/Navigation"));
export default function Project() {
  return (
    <div>
      <SEO />
      <Navigation />
    </div>
  );
}
