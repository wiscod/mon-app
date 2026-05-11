export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate-400 mb-2">
          © {new Date().getFullYear()} wiscod. All rights reserved.
        </p>
        <p className="text-slate-500 text-sm">
          Built with Next.js, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
