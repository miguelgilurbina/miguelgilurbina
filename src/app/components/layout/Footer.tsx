export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-4 mt-12">
      <div className="container mx-auto px-4 text-center text-sm md:text-base">
        <p>&copy; 2024 Miguel Gil. Todos los derechos reservados.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a
            href="https://github.com/miguelgilurbina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-foreground/80 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/miguelgilurbina/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-foreground/80 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
