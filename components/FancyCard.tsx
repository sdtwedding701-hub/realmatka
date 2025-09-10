import { motion } from "framer-motion";
import { type ReactNode } from "react";
export default function FancyCard({ children }: { children: ReactNode }) {
  return (<motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="card p-5 glow-ring">{children}</motion.div>);
}
