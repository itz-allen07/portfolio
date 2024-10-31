import React from 'react';
import { Github, Linkedin, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-gold font-serif mb-12 text-center">Contact</h2>
        <div className="flex justify-center space-x-8">
          <a
            href="https://linkedin.com/in/allen-mano-a9056a2aa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold/80 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://discord.com/users/allenmano"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold/80 transition-colors"
          >
            <MessageSquare size={24} />
          </a>
          <a
            href="https://github.com/itz-allen07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold/80 transition-colors"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}