import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full flex items-end justify-center">
      <div className="w-full px-6 sm:px-12 lg:px-52 py-2">
        <Link href="/legal">
          <p className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-200">
            Legal
          </p>
        </Link>
      </div>
    </footer>
  );
}
