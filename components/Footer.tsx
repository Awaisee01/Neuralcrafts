import React from "react";

interface FooterColumn {
  title: string;
  items: string[];
}

const footerData: FooterColumn[] = [
  {
    title: "Buy",
    items: ["Registration", "Neural crafts", "Bidding & Buying Help", "Stores"],
  },
  {
    title: "Learn",
    items: ["Start learning", "Affiliates", "Tools & apps", "Developer"],
  },
  {
    title: "Stay connected",
    items: ["Neuralcraft blog", "Facebook"],
  },
  {
    title: "About Neuralcrafts",
    items: ["Company info", "News", "Investor", "Careers", "Policies"],
  },
  {
    title: "Help & Contact",
    items: [
      "Seller Information Centre",
      "Contact Us",
      "Community",
      "Announcement",
      "Discussion Boards",
      "Neural crafts Giving Works",
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden w-full">
      {/* Light theme background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4CC9F0] to-[#02D9C0] dark:hidden z-0" />

      {/* Dark theme glass effect */}
      <div
        className="absolute inset-0 z-0 hidden dark:block shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
        style={{
          background: "rgba(255, 255, 255, 0.13)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      />

      {/* Dark mode blur circles */}
      <div className="absolute right-[-50px] bottom-[-100px] w-[500px] h-[500px] rounded-full bg-[#8726DC] opacity-30 blur-3xl pointer-events-none z-10 hidden dark:sm:block" />
      <div className="absolute left-[-50px] bottom-[-100px] w-[300px] h-[300px] rounded-full bg-[#8726DC] opacity-30 blur-3xl pointer-events-none z-10 hidden dark:sm:block" />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 text-black dark:text-white">
        {/* Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {footerData.map((col, index) => (
            <div key={index}>
              <h3 className="text-md font-bold mb-4 uppercase">{col.title}</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                {col.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        {/* <div className="mt-12 pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-black/70 dark:text-white/60">
          <div>© {new Date().getFullYear()} Neuralcrafts. All rights reserved.</div>
          <div className="flex gap-4">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Cookies</span>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
