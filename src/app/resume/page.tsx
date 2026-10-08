"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

const FILE_ID = "1vMeOvpBE95XvXV2LgxSrHdH1PrPuo_Qk";
const PREVIEW_URL = `https://drive.google.com/file/d/${FILE_ID}/preview`;
const VIEW_URL = `https://drive.google.com/file/d/${FILE_ID}/view`;
const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;

const ResumePage = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-headline mb-6">CV</h1>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={DOWNLOAD_URL}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            <Download size={16} /> Download PDF
          </a>
          <a
            href={VIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10"
          >
            Open in Google Drive
          </a>
        </div>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-4xl mx-auto"
      >
        <iframe
          src={PREVIEW_URL}
          title="Jayin Khanna — CV"
          className="w-full h-[85vh] rounded-md border border-border bg-card"
          allow="autoplay"
        />
      </motion.div>
    </div>
  );
};

export default ResumePage;
