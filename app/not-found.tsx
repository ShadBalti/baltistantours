export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground px-4">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The page you’re looking for doesn’t exist.
      </p>

      <a
        href="/"
        className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 text-primary-foreground hover:opacity-90 transition"
      >
        Go back home
      </a>
    </div>
  );
}