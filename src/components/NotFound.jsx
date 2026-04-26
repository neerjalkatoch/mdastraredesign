'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import './NotFound.css';

function NotFound() {
  return (
    <section className="not-found">
      <motion.div
        className="not-found-content container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="not-found-code">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-description">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn btn-primary">
          Go Home
        </Link>
      </motion.div>
    </section>
  );
}

export default NotFound;
