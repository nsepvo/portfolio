import { ReactNode } from "react";

export default function Section({
  title,
  children,
  id
}: {
  title?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-16">
      {title && (
        <h2 className="text-xl md:text-2xl mb-6 text-white/90">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
