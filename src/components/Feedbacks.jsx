import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Import your certificate icons
import matlabIcon from "../assets/matlab-icon.png";
import ibmIcon from "../assets/ibm-icon.png";
import microsoftIcon from "../assets/microsoft-icon.png";

const Feedbacks = () => {
  const [activeCertificate, setActiveCertificate] = useState(null);

  // Certificate data
  const certificates = [
    {
      id: 1,
      file: "/certificates/MATLAB.pdf",
      name: "MATLAB Certification",
      description:
        "This certification demonstrates proficiency in MATLAB, a high-level programming language widely used in engineering and data analysis.",
      icon: matlabIcon,
    },
    {
      id: 2,
      file: "/certificates/IBM Applied AI Professional Certificate.pdf",
      name: "IBM Applied AI Fundamentals Specialization",
      description:
        "This Professional Certificate provided me a firm understanding of AI, its applications, and its use cases. Through this, I have become familiar with IBM Watson AI services and APIs. I also grasped how virtual assistant technology works and built and deployed an AI powered customer support chatbot on a website. I worked with Computer Vision, Watson Visual Recognition and OpenCV for image processing and creating custom image classifiers.",
      icon: ibmIcon,
    },
    {
      id: 3,
      file: "/certificates/Microsoft-AzureFundamentls-AI-900.pdf",
      name: "Microsoft Certified: Azure AI Fundamentals",
      description:
        "Through the Microsoft Azure-AI 900 certification I have gained skills in describing AI workloads and considerations, understanding the fundamental principles of machine learning on Azure, and detailing features of computer vision, natural language processing (NLP), and generative AI workloads on Azure.",
      icon: microsoftIcon,
    },
  ];

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Achievements</p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {/* Certificate Buttons */}
        {certificates.map((certificate) => (
          <div key={certificate.id} className="flex flex-col items-center">
            <div className="flex items-center gap-4">
              <img
                src={certificate.icon}
                alt={`${certificate.name} icon`}
                className="w-10 h-10"
              />
              <a
                href={certificate.file}
                download
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-center"
                onClick={() =>
                  setActiveCertificate(
                    activeCertificate === certificate.id
                      ? null
                      : certificate.id
                  )
                }
              >
                {certificate.name}
              </a>
            </div>

            {/* Description Box */}
            {activeCertificate === certificate.id && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4 bg-tertiary text-white p-4 rounded-lg max-w-sm"
              >
                <p className="text-[16px]">{certificate.description}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
