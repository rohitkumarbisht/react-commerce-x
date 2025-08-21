type Props = {
  toggleTheme: () => void;
};

export default function HomePage({ toggleTheme }: Props) {
  return (
    <div>
      <h1>🏪 Storefront Home</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
