
import HeroComponent from "../components/Hero";
import FeatureComponent from "../components/Feature";
import TheAppComponent from "../components/TheApp";
import ReviewComponent from "../components/Review";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroComponent />
      <FeatureComponent />
      <TheAppComponent />
      <ReviewComponent />
    </main>
  );
}
