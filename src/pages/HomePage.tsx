import LoginButtons from "../components/LoginButtons";
import ThemeToggleButton from "../components/ThemeToggleButton";


export default function HomePage() {
  return (
    <div>
      <h1>🏪 Storefront Home</h1>
      <ThemeToggleButton />
      <LoginButtons/>
    </div>
  );
}
